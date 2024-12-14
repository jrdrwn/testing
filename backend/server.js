const dotenv = require("dotenv"); // Memuat variabel lingkungan dari file .env
const session = require("express-session"); // Import express-session
const passport = require("passport"); // Import passport
const https = require("https"); // Membuat server HTTPS
const fs = require("fs"); // Mengakses file sistem
const path = require("path"); // Mengelola path file/direktori
const { constants } = require("crypto"); // Menggunakan 'constants' untuk SSL/TLS konfigurasi
const app = require("./app.js"); // Mengimpor aplikasi Express
const { User } = require("./database/models"); // Import User model
const authenticateToken = require("./middleware/tokenAuthentication"); // Import token authentication middleware
const bcrypt = require("bcrypt"); // Import bcrypt untuk enkripsi password
const emailController = require("./Controllers/emailController"); // Import emailController

// Memuat variabel dari file .env
dotenv.config();

// Configure session and cookie settings
app.use(
    session({
        secret: process.env.JWT_SECRET,
        resave: true,
        saveUninitialized: true,
    })
);

// Passport middleware setelah session
app.use(passport.initialize());
app.use(passport.session()); // Inisialisasi sesi passport

// Middleware for JWT authentication
app.use(authenticateToken);

// Validasi variabel lingkungan penting
const requiredEnvVars = ["APP_URL", "HTTPS_PORT", "SSL_KEY_PATH", "SSL_CERT_PATH", "JWT_SECRET",];
const missingVars = requiredEnvVars.filter((key) => !process.env[key]);

if (missingVars.length > 0) {
    console.error(`ERROR: Variabel lingkungan berikut tidak ditemukan: ${missingVars.join(", ")}`);
    process.exit(1); // Menghentikan aplikasi jika variabel penting tidak ditemukan
}

// Mendapatkan port dan URL dari variabel lingkungan
const HTTPS_PORT = process.env.HTTPS_PORT || 5000; // Default ke 5000 jika HTTPS_PORT tidak diatur
const APP_URL = process.env.APP_URL;

// Konfigurasi SSL/TLS untuk server HTTPS
const sslOptions = {
    key: fs.readFileSync(path.resolve(process.env.SSL_KEY_PATH)), // Membaca file private key SSL
    cert: fs.readFileSync(path.resolve(process.env.SSL_CERT_PATH)), // Membaca file sertifikat SSL
    ca: process.env.SSL_CA_PATH ? fs.readFileSync(path.resolve(process.env.SSL_CA_PATH)) : undefined, // CA opsional
    secureOptions: constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1, // Menonaktifkan TLSv1 dan TLSv1.1
};


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findByPk(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});


// Route for user registration
app.post("/api/auth/register", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Buat user baru
        const newUser = await User.create({
            name: `${firstName} ${lastName}`,
            email,
            password: hashedPassword,
            email_verified: "0",
        });

        // Generate dan simpan kode verifikasi
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        const expiryTime = new Date(Date.now() + 15 * 60000); // 15 menit

        await User.update(
            {
                email_verification_token: verificationCode,
                email_verification_token_expires: expiryTime,
            },
            {
                where: { email },
            }
        );

        // Kirim email verifikasi
        try {
            await emailController.sendVerificationEmail(email, verificationCode);
            console.log("Verification email sent successfully");
        } catch (error) {
            console.error("Error sending verification email:", error);
            throw error;
        }

        res.status(201).json({
            message: "Registrasi berhasil, silakan cek email Anda untuk verifikasi",
            user: {
                id: newUser.id,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Terjadi kesalahan saat registrasi" });
    }
});






// Middleware to handle 404 errors
app.use((req, res, next) => {
    res.status(404).json({ message: "Resource not found" });
});

// Membuat server HTTPS dan menyimpannya dalam variabel
const server = https.createServer(sslOptions, app);

// Middleware to handle OpaqueResponseBlocking errors
app.use((req, res, next) => {
    if (res.statusCode === 0) {
        console.error("Blocked by OpaqueResponseBlocking:", req.originalUrl);
        return res.status(403).json({ message: "Blocked by OpaqueResponseBlocking" });
    }
    next();
});

// Add headers to allow third-party cookies and storage access
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", process.env.APP_URL);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

// Menjalankan server HTTPS
server.listen(HTTPS_PORT, () => {
    console.log(`✅ Server aman berjalan di ${APP_URL}:${HTTPS_PORT}`);
});

server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.error(`Port ${HTTPS_PORT} is already in use.`);
        process.exit(1); // Exit the process if the port is already in use
    } else {
        console.error("Server error:", err);
        process.exit(1);
    }
});

// Menangani error yang tidak ditangkap
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
    server.close(() => {
        console.log("HTTP server closed due to uncaught exception");
        process.exit(1); // Keluar dari aplikasi jika terjadi error tak terduga
    });
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    server.close(() => {
        console.log("HTTP server closed due to unhandled rejection");
        process.exit(1); // Keluar dari aplikasi jika ada promise yang tidak ditangani
    });
});

// Graceful shutdown untuk menangani SIGTERM atau SIGINT
process.on("SIGTERM", () => {
    console.log("SIGTERM signal received: closing HTTP server");
    server.close(() => {
        console.log("HTTP server closed");
        process.exit(0);
    });
});

process.on("SIGINT", () => {
    console.log("SIGINT signal received: closing HTTP server");
    server.close(() => {
        console.log("HTTP server closed");
        process.exit(0);
    });
});
