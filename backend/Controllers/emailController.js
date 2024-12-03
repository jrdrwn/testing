const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const { User } = require("../database/models");
const jwt = require("jsonwebtoken");

// Utility functions
const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

const createExpiryTime = () => {
    return new Date(Date.now() + 15 * 60000); // 15 menit
};

// Email configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Email sending functions
const sendVerificationEmail = async (email, token) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Verifikasi Akun Pintura",
        html: `
            <h1>Verifikasi Akun Anda</h1>
            <p>Kode verifikasi Anda adalah:</p>
            <h2>${token}</h2>
            <p>Kode ini akan kadaluarsa dalam 15 menit.</p>
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

const sendPasswordResetEmail = async (email, token) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Reset Password Pintura",
        html: `
            <h1>Reset Password</h1>
            <p>Kode OTP untuk reset password Anda adalah:</p>
            <h2>${token}</h2>
            <p>Kode ini akan kadaluarsa dalam 15 menit.</p>
        `,
    };

    return transporter.sendMail(mailOptions);
};

// Controller functions
const sendVerificationCode = async (req, res) => {
    try {
        const { email } = req.body;
        const verificationCode = generateVerificationCode();
        const expiryTime = createExpiryTime();

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "Email tidak ditemukan" });
        }

        await User.update(
            {
                email_verification_token: verificationCode,
                email_verification_token_expires: expiryTime,
            },
            { where: { email } }
        );

        await sendVerificationEmail(email, verificationCode);
        res.status(200).json({ message: "Kode verifikasi telah dikirim" });
    } catch (error) {
        console.error("Error in sendVerificationCode:", error);
        res.status(500).json({ message: "Terjadi kesalahan saat mengirim kode verifikasi" });
    }
};

const verifyCode = async (req, res) => {
    try {
        const { email, code } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: "Email tidak ditemukan" });
        }

        if (user.email_verification_token !== code) {
            return res.status(400).json({ message: "Kode verifikasi tidak valid" });
        }

        if (new Date() > user.email_verification_token_expires) {
            return res.status(400).json({ message: "Kode verifikasi telah kadaluarsa" });
        }

        await User.update(
            {
                email_verified: "1",
                email_verification_token: null,
                email_verification_token_expires: null,
            },
            { where: { email } }
        );

        res.status(200).json({ message: "Verifikasi berhasil" });
    } catch (error) {
        console.error("Error verifying code:", error);
        res.status(500).json({ 
            message: "Terjadi kesalahan saat verifikasi",
            error: error.message 
        });
    }
};

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const resetCode = generateVerificationCode();
        const expiryTime = createExpiryTime();

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "Email tidak ditemukan" });
        }

        await User.update(
            {
                reset_password_token: resetCode,
                reset_password_expires: expiryTime,
            },
            { where: { email } }
        );

        await sendPasswordResetEmail(email, resetCode);
        res.status(200).json({ message: "Kode reset password telah dikirim" });
    } catch (error) {
        console.error("Error in forgot password:", error);
        res.status(500).json({ message: "Terjadi kesalahan saat memproses permintaan" });
    }
};

const resetPassword = async (req, res) => {
    try {
        console.log("Reset password request received:", req.body);
        const { email, code, newPassword } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            console.log("User not found:", email);
            return res.status(404).json({ message: "Email tidak ditemukan" });
        }

        console.log("Stored reset token:", user.reset_password_token);
        console.log("Received code:", code);

        if (user.reset_password_token !== code) {
            console.log("Invalid reset code");
            return res.status(400).json({ message: "Kode reset tidak valid" });
        }

        if (new Date() > user.reset_password_expires) {
            console.log("Reset code expired");
            return res.status(400).json({ message: "Kode reset telah kadaluarsa" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        console.log("Password hashed successfully");

        await User.update(
            {
                password: hashedPassword,
                reset_password_token: null,
                reset_password_expires: null,
            },
            {
                where: { email },
            }
        );

        console.log("Password updated successfully");
        res.status(200).json({ message: "Password berhasil direset" });
    } catch (error) {
        console.error("Error in reset password:", error);
        res.status(500).json({ message: "Terjadi kesalahan saat reset password" });
    }
};

const verifyResetCode = async (req, res) => {
    try {
        const { email, code } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "Email tidak ditemukan" });
        }

        if (user.reset_password_token !== code) {
            return res.status(400).json({ message: "Kode reset tidak valid" });
        }

        if (new Date() > user.reset_password_expires) {
            return res.status(400).json({ message: "Kode reset telah kadaluarsa" });
        }

        // Set reset_password_token dan reset_password_expires menjadi null
        await User.update({
            reset_password_token: null,
            reset_password_expires: null
        }, {
            where: { email }
        });

        res.status(200).json({ message: "Kode reset valid" });
    } catch (error) {
        console.error("Error verifying reset code:", error);
        res.status(500).json({ message: "Terjadi kesalahan saat verifikasi" });
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
