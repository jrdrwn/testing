const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const { User } = require('../database/models');
const jwt = require('jsonwebtoken');

// Konfigurasi transporter email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Fungsi untuk mengirim email verifikasi
const sendVerificationEmail = async (email, token) => {
  try {
    console.log('Attempting to send verification email to:', email);
    console.log('With token:', token);
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Verifikasi Akun Pintura',
      html: `
        <h1>Verifikasi Akun Anda</h1>
        <p>Kode verifikasi Anda adalah:</p>
        <h2>${token}</h2>
        <p>Kode ini akan kadaluarsa dalam 15 menit.</p>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result);
    return result;
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw error;
  }
};

// Fungsi untuk mengirim email reset password
const sendPasswordResetEmail = async (email, token) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Reset Password Pintura',
    html: `
      <h1>Reset Password</h1>
      <p>Kode OTP untuk reset password Anda adalah:</p>
      <h2>${token}</h2>
      <p>Kode ini akan kadaluarsa dalam 15 menit.</p>
    `
  };

  return transporter.sendMail(mailOptions);
};

// Controller untuk mengirim kode verifikasi
const sendVerificationCode = async (req, res) => {
  try {
    console.log('Request body:', req.body); // Log request body
    const { email } = req.body;
    console.log('Email:', email); // Log email

    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('Generated verification code:', verificationCode); // Log kode verifikasi

    const expiryTime = new Date(Date.now() + 15 * 60000);
    console.log('Expiry time:', expiryTime); // Log waktu kadaluarsa

    const user = await User.findOne({ where: { email } });
    console.log('Found user:', user); // Log user yang ditemukan

    if (!user) {
      console.log('User not found'); // Log jika user tidak ditemukan
      return res.status(404).json({ message: 'Email tidak ditemukan' });
    }

    await User.update({
      email_verification_token: verificationCode,
      email_verification_token_expires: expiryTime
    }, {
      where: { email }
    });
    console.log('User updated with verification code'); // Log update berhasil

    await sendVerificationEmail(email, verificationCode);
    console.log('Verification email sent'); // Log email terkirim

    res.status(200).json({ message: 'Kode verifikasi telah dikirim' });
  } catch (error) {
    console.error('Error in sendVerificationCode:', error); // Log detail error
    res.status(500).json({ message: 'Terjadi kesalahan saat mengirim kode verifikasi' });
  }
};

// Controller untuk verifikasi kode
const verifyCode = async (req, res) => {
  try {
    console.log('Received verification request:', req.body);
    const { email, code } = req.body;

    const user = await User.findOne({ where: { email } });
    console.log('Found user:', user);

    if (!user) {
      return res.status(404).json({ message: 'Email tidak ditemukan' });
    }

    if (user.email_verification_token !== code) {
      console.log('Invalid code. Expected:', user.email_verification_token, 'Received:', code);
      return res.status(400).json({ message: 'Kode verifikasi tidak valid' });
    }

    if (new Date() > user.email_verification_token_expires) {
      return res.status(400).json({ message: 'Kode verifikasi telah kadaluarsa' });
    }

    // Coba update menggunakan model Sequelize terlebih dahulu
    const updateResult = await User.update(
      {
        email_verified: '1',  // Pastikan ini string '1' bukan boolean
        email_verification_token: null,
        email_verification_token_expires: null
      },
      {
        where: { email },
        returning: true
      }
    );

    console.log('Sequelize update result:', updateResult);

    // Jika update Sequelize gagal, gunakan raw query
    if (!updateResult[0]) {
      const [rawUpdateCount] = await User.sequelize.query(
        'UPDATE users SET email_verified = "1", email_verification_token = NULL, email_verification_token_expires = NULL WHERE email = ?',
        {
          replacements: [email],
          type: User.sequelize.QueryTypes.UPDATE
        }
      );
      console.log('Raw query update count:', rawUpdateCount);

      if (rawUpdateCount === 0) {
        throw new Error('Failed to update user verification status');
      }
    }

    // Verifikasi bahwa update berhasil
    const updatedUser = await User.findOne({ 
      where: { email },
      raw: true  // Tambahkan ini untuk mendapatkan data mentah
    });
    console.log('Updated user raw data:', updatedUser);

    if (updatedUser.email_verified !== '1') {
      throw new Error(`Verification status not updated correctly. Current value: ${updatedUser.email_verified}`);
    }

    res.status(200).json({ message: 'Verifikasi berhasil' });
  } catch (error) {
    console.error('Error verifying code:', error);
    res.status(500).json({ 
      message: 'Terjadi kesalahan saat verifikasi',
      error: error.message,
      stack: error.stack
    });
  }
};

// Controller untuk forgot password
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiryTime = new Date(Date.now() + 15 * 60000); // 15 menit

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Email tidak ditemukan' });
    }

    await User.update({
      reset_password_token: resetCode,
      reset_password_expires: expiryTime
    }, {
      where: { email }
    });

    await sendPasswordResetEmail(email, resetCode);

    res.status(200).json({ message: 'Kode reset password telah dikirim' });
  } catch (error) {
    console.error('Error in forgot password:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat memproses permintaan' });
  }
};

// Controller untuk reset password
const resetPassword = async (req, res) => {
  try {
    const { email, code, newPassword } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Email tidak ditemukan' });
    }

    if (user.reset_password_token !== code) {
      return res.status(400).json({ message: 'Kode reset tidak valid' });
    }

    if (new Date() > user.reset_password_expires) {
      return res.status(400).json({ message: 'Kode reset telah kadaluarsa' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await User.update({
      password: hashedPassword,
      reset_password_token: null,
      reset_password_expires: null
    }, {
      where: { email }
    });

    res.status(200).json({ message: 'Password berhasil direset' });
  } catch (error) {
    console.error('Error in reset password:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat reset password' });
  }
};

module.exports = {
  sendVerificationCode,
  verifyCode,
  forgotPassword,
  resetPassword,
  sendVerificationEmail
}; 