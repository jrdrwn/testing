const express = require('express'); // Framework Express
const path = require('path'); // Untuk path file/direktori
const cors = require('cors'); // Middleware CORS
const jwt = require('jsonwebtoken'); // Untuk autentikasi berbasis token
const api = require('./api.js');
const routes = require('./routes/routes'); // Correct import path for routes
const passport = require('passport'); // Import passport

const app = express(); // Membuat aplikasi Express

// Middleware untuk parsing JSON
app.use(express.json());

// Daftar origin yang diizinkan untuk CORS
const allowedOrigins = ['https://localhost:3000', 'https://localhost:5000', 'https://yourdomain.com']; // Ensure correct origins

// Konfigurasi middleware CORS
app.use(
  cors({
    origin: (origin, callback) => {
      // Izinkan permintaan tanpa Origin (untuk Postman) atau dari allowedOrigins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Izinkan permintaan
      } else {
        console.error(`Blocked by CORS: ${origin}`); // Log origin yang diblokir
        callback(new Error('Not allowed by CORS')); // Tolak permintaan
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'], // HTTP methods yang diizinkan
    allowedHeaders: ['Content-Type', 'Authorization'], // Header yang diizinkan
    credentials: true, // Izinkan pengiriman cookie
  })
);

// Middleware to handle third-party cookies
app.use((req, res, next) => {
  res.setHeader('Set-Cookie', 'SameSite=None; Secure');
  next();
});

// Middleware untuk memblokir akses ke alamat IP metadata cloud
app.use((req, res, next) => {
  const forbiddenIps = ['169.254.169.254'];

  // Periksa apakah IP target termasuk dalam daftar yang dilarang
  if (forbiddenIps.includes(req.ip) || req.hostname === '169.254.169.254' || req.originalUrl.includes('169.254.169.254')) {
    console.warn(`Blocked access to forbidden IP or URL: ${req.ip} | ${req.hostname} | ${req.originalUrl}`);
    return res.status(403).json({ message: 'Access to metadata is forbidden' });
  }

  next();
});

// Middleware untuk validasi Host header
app.use((req, res, next) => {
  const allowedHosts = ['localhost', '127.0.0.1', 'yourdomain.com'];

  if (!allowedHosts.includes(req.hostname)) {
    console.warn(`Blocked request with invalid Host header: ${req.hostname}`);
    return res.status(400).json({ message: 'Invalid Host header' });
  }

  next();
});

// Middleware untuk logging permintaan
app.use((req, res, next) => {
  console.log('Request Details:');
  console.log(`[IP]: ${req.ip}`);
  console.log(`[Origin]: ${req.headers.origin}`);
  console.log(`[Method]: ${req.method}`);
  console.log(`[URL]: ${req.originalUrl}`);
  console.log(`[Headers]:`, req.headers);
  next();
});

// Middleware keamanan
app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload'); // HSTS
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' https://cdnjs.cloudflare.com https://fonts.googleapis.com; " +
    "style-src 'self' https://cdnjs.cloudflare.com https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; " +
    "img-src 'self' data: https:; " +
    "connect-src 'self' https://localhost:5000; " + // Changed to https
    "frame-ancestors 'none';" // Prevent clickjacking
  );
  res.setHeader('X-Frame-Options', 'DENY'); // Perlindungan clickjacking
  res.setHeader('X-Content-Type-Options', 'nosniff'); // Mencegah MIME sniffing
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private'); // Cache control
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin'); // Referrer policy
  next();
});

// Nonaktifkan header X-Powered-By untuk menyembunyikan framework
app.disable('x-powered-by');

// Initialize passport
app.use(passport.initialize());

// Middleware untuk autentikasi token JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Unauthorized: No token provided.' });

  jwt.verify(token, process.env.JWT_SECRET || 'defaultsecret', (err, user) => {
    if (err) return res.status(403).json({ message: 'Forbidden: Invalid token.' });
    req.user = user; // Menyimpan data pengguna dari token
    next();
  });
}

// Middleware untuk melayani file statis dari folder 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// API endpoint umum
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Secure Express.js!' });
});

// API endpoint yang membutuhkan autentikasi
app.get('/api/secure-data', authenticateToken, (req, res) => {
  res.json({ message: `Hello, ${req.user.name || 'user'}! You have access to secure data.` });
});

// Use routes
app.use('/api/auth', routes);
app.use(routes);

// Route fallback untuk SPA (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Middleware to handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

module.exports = app; // Ekspor aplikasi untuk digunakan di server
