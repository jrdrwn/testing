const dotenv = require('dotenv'); // Memuat variabel lingkungan dari file .env
const session = require('express-session'); // Import express-session
const passport = require('passport'); // Import passport
const https = require('https');  // Membuat server HTTPS
const fs = require('fs');        // Mengakses file sistem
const path = require('path');    // Mengelola path file/direktori
const { constants } = require('crypto'); // Menggunakan 'constants' untuk SSL/TLS konfigurasi
const app = require('./app.js'); // Mengimpor aplikasi Express
const { User } = require('./database/models'); // Import User model
const authenticateToken = require('./middleware/tokenAuthentication'); // Import token authentication middleware
const GoogleStrategy = require('passport-google-oauth20').Strategy; // Import Google OAuth strategy


// Memuat variabel dari file .env
dotenv.config();


// Configure session and cookie settings
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: true,
  saveUninitialized: true,
 
}));

// Passport middleware setelah session
app.use(passport.initialize());
app.use(passport.session()); // Inisialisasi sesi passport

// Middleware for JWT authentication
app.use(authenticateToken);

// Validasi variabel lingkungan penting
const requiredEnvVars = ['APP_URL', 'HTTPS_PORT', 'SSL_KEY_PATH', 'SSL_CERT_PATH', 'JWT_SECRET', 'GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET'];
const missingVars = requiredEnvVars.filter((key) => !process.env[key]);

if (missingVars.length > 0) {
  console.error(`ERROR: Variabel lingkungan berikut tidak ditemukan: ${missingVars.join(', ')}`);
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



// Passport configuration
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `${process.env.APP_URL}:${process.env.HTTPS_PORT}/auth/google/callback`
}, async (token, tokenSecret, profile, done) => {
  try {
    console.log('Google profile received:', profile); // Log profil Google

    // Cek apakah pengguna sudah ada berdasarkan googleId
    let user = await User.findOne({ where: { google_id: profile.id } });

    if (user) {
      // Jika pengguna sudah ada berdasarkan googleId, login pengguna
      console.log('Existing user found with Google ID:', user);
      return done(null, user);
    } else {
      // Jika pengguna belum ada, cek berdasarkan email
      user = await User.findOne({ where: { email: profile.emails[0].value } });

      if (user) {
        // Jika pengguna ditemukan berdasarkan email, login pengguna
        console.log('Existing user found with email:', user);
        return done(null, user);
      } else {
        // Jika tidak ada pengguna, buat pengguna baru
        console.log('No user found. Creating a new user...');
        user = await User.create({
          google_id: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          password: '', // Kosongkan password atau atur sesuai kebutuhan
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        });

        console.log('New user created:', user);
        return done(null, user); // Redirect ke callback dan login user baru
      }
    }
  } catch (error) {
    console.error('Error in Google OAuth strategy:', error);
    return done(error, null); // Jika terjadi error, kirim ke done
  }
}));

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

// Route for Google OAuth registration
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', (req, res, next) => {
  passport.authenticate('google', (err, user, info) => {
    if (err) {
      console.error('Authentication error:', err); // Debug error
      return res.status(500).json({ message: 'Authentication failed', error: err });
    }
    if (!user) {
      console.error('No user found. Redirecting to home...');
      return res.redirect('/'); // Redirect ke home jika user tidak ditemukan
    }
    req.login(user, (err) => {
      if (err) {
        console.error('Error during login:', err); // Debug login error
        return res.status(500).json({ message: 'Login failed', error: err });
      }
      console.log('User successfully logged in:', user); // Debug sukses login
      return res.redirect('/dashboard'); // Redirect ke dashboard setelah login
    });
  })(req, res, next);
});



// Route for user registration
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await User.create({ name, email, password });
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


/* async function createTransaction(userId, sessionId, amount, status) {
  try {
    const transaction = await StripeTransaction.create({
      user_id: userId,
      session_id: sessionId,
      amount: amount,
      status: status,
    });
    console.log('Transaction created:', transaction);
  } catch (error) {
    console.error('Error creating transaction:', error);
  }
}  */


// Middleware to handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Membuat server HTTPS dan menyimpannya dalam variabel
const server = https.createServer(sslOptions, app);

// Middleware to handle OpaqueResponseBlocking errors
app.use((req, res, next) => {
  if (res.statusCode === 0) {
    console.error('Blocked by OpaqueResponseBlocking:', req.originalUrl);
    return res.status(403).json({ message: 'Blocked by OpaqueResponseBlocking' });
  }
  next();
});

// Add headers to allow third-party cookies and storage access
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});


// Menjalankan server HTTPS
server.listen(HTTPS_PORT, () => {
  console.log(`✅ Server aman berjalan di ${APP_URL}:${HTTPS_PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${HTTPS_PORT} is already in use.`);
    process.exit(1); // Exit the process if the port is already in use
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
});

// Menangani error yang tidak ditangkap
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  server.close(() => {
    console.log('HTTP server closed due to uncaught exception');
    process.exit(1); // Keluar dari aplikasi jika terjadi error tak terduga
  });
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  server.close(() => {
    console.log('HTTP server closed due to unhandled rejection');
    process.exit(1); // Keluar dari aplikasi jika ada promise yang tidak ditangani
  });
});

// Graceful shutdown untuk menangani SIGTERM atau SIGINT
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});
