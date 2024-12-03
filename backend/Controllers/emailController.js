const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const { User } = require("../database/models");
const jwt = require("jsonwebtoken");

// Fungsi untuk generate kode verifikasi 6 digit
const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

// Fungsi untuk membuat waktu kadaluarsa 15 menit dari sekarang
const createExpiryTime = () => {
    return new Date(Date.now() + 15 * 60000);
};

// Konfigurasi email menggunakan Gmail
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Fungsi untuk mengirim email verifikasi akun
const sendVerificationEmail = async (email, verificationCode) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Verify Your Account",
        html: `
            <h1>Verify Your Account</h1>
            <p>Your verification code is:</p>
            <h2>${verificationCode}</h2>
            <p>This code will expire in 15 minutes.</p>
        `,
    };

    try {
        const result = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", result);
        return result;
    } catch (error) {
        console.error("Error sending verification email:", error);
        throw error;
    }
};

// Fungsi untuk mengirim email reset password
const sendPasswordResetEmail = async (email, resetCode) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Password Reset",
        html: `
            <h1>Password Reset</h1>
            <p>Your OTP code for password reset is:</p>
            <h2>${resetCode}</h2>
            <p>This code will expire in 15 minutes.</p>
        `,
    };

    return transporter.sendMail(mailOptions);
};

// Controller untuk mengirim kode verifikasi email
const sendVerificationCode = async (req, res) => {
    try {
        const { email } = req.body;
        const verificationCode = generateVerificationCode();
        const expiryTime = createExpiryTime();

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "Email not found" });
        }

        await User.update(
            {
                email_verification_token: verificationCode,
                email_verification_token_expires: expiryTime,
            },
            { where: { email } }
        );

        await sendVerificationEmail(email, verificationCode);
        res.status(200).json({ message: "Verification code has been sent" });
    } catch (error) {
        console.error("Error in sendVerificationCode:", error);
        res.status(500).json({ message: "An error occurred while sending verification code" });
    }
};

// Controller untuk verifikasi kode email
const verifyCode = async (req, res) => {
    try {
        const { email, code } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: "Email not found" });
        }

        if (user.email_verification_token !== code) {
            return res.status(400).json({ message: "Invalid verification code" });
        }

        if (new Date() > user.email_verification_token_expires) {
            return res.status(400).json({ message: "Verification code has expired" });
        }

        await User.update(
            {
                email_verified: "1",
                email_verification_token: null,
                email_verification_token_expires: null,
            },
            { where: { email } }
        );

        res.status(200).json({ message: "Verification successful" });
    } catch (error) {
        console.error("Error verifying code:", error);
        res.status(500).json({ 
            message: "An error occurred while verifying",
            error: error.message 
        });
    }
};

// Controller untuk mengirim kode reset password
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const resetCode = generateVerificationCode();
        const expiryTime = createExpiryTime();

        console.log("Generated reset code:", resetCode);
        console.log("Generated expiry time:", expiryTime);

        const user = await User.findOne({ where: { email } });
        if (!user) {
            console.error("User not found:", email);
            return res.status(404).json({ message: "Email not found" });
        }

        const updateResult = await User.update(
            {
                reset_password_token: resetCode,
                reset_password_token_expires: expiryTime,
            },
            { where: { email } }
        );

        console.log("Update result:", updateResult);

        await sendPasswordResetEmail(email, resetCode);
        console.log("Reset email sent successfully");

        res.status(200).json({ message: "Password reset code has been sent" });
    } catch (error) {
        console.error("Error in forgotPassword:", error);
        res.status(500).json({ message: "An error occurred while processing the request" });
    }
};

// Controller untuk verifikasi kode reset password
const verifyResetCode = async (req, res) => {
    try {
        const { email, code } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "Email not found" });
        }

        if (user.reset_password_token !== code) {
            return res.status(400).json({ message: "Invalid reset code" });
        }

        if (new Date() > user.reset_password_token_expires) {
            return res.status(400).json({ message: "Reset code has expired" });
        }

        res.status(200).json({ message: "Reset code valid" });
    } catch (error) {
        console.error("Error verifying reset code:", error);
        res.status(500).json({ message: "An error occurred while verifying" });
    }
};

// Controller untuk melakukan reset password
const resetPassword = async (req, res) => {
    try {
        console.log("Reset password request received:", req.body);
        const { email, code, newPassword } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            console.error("User not found:", email);
            return res.status(404).json({ message: "Email not found" });
        }

        console.log("Stored reset token:", user.reset_password_token);
        console.log("Received code:", code);

        if (user.reset_password_token !== code) {
            console.error("Invalid reset code");
            return res.status(400).json({ message: "Invalid reset code" });
        }

        if (new Date() > user.reset_password_token_expires) {
            console.error("Reset code expired");
            return res.status(400).json({ message: "Reset code has expired" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        console.log("Password hashed successfully");

        await User.update(
            {
                password: hashedPassword,
                reset_password_token: null,
                reset_password_token_expires: null,
            },
            {
                where: { email },
            }
        );

        console.log("Password updated successfully");
        res.status(200).json({ message: "Password has been reset successfully" });
    } catch (error) {
        console.error("Error in resetPassword:", error);
        res.status(500).json({ message: "An error occurred while resetting the password" });
    }
};

module.exports = {
    sendVerificationCode,
    verifyCode,
    forgotPassword,
    resetPassword,
    sendVerificationEmail,
    verifyResetCode,
};
