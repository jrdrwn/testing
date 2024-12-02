const express = require('express'); // Framework Express
const path = require('path'); // Untuk path file/direktori
const api = require('./api.js');
const routes = require('./routes/routes'); // Correct import path for routes
const corsMiddleware = require('./middleware/cors');
const errorHandlingMiddleware = require('./middleware/errorHandling');
const headersMiddleware = require('./middleware/headers');
const loggingMiddleware = require('./middleware/logging');
const securityMiddleware = require('./middleware/security');
const authenticateToken = require('./middleware/tokenAuthentication');
const validateHostMiddleware = require('./middleware/validateHost');


const app = express(); // Membuat aplikasi Express


// Use middleware
app.use(corsMiddleware);
app.use(loggingMiddleware);
app.use(securityMiddleware);
app.use(validateHostMiddleware);
app.use(headersMiddleware);


// Middleware untuk parsing JSON
app.use(express.json());




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




// Nonaktifkan header X-Powered-By untuk menyembunyikan framework
app.disable('x-powered-by');


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

// Error handling
app.use(errorHandlingMiddleware);

module.exports = app; // Ekspor aplikasi untuk digunakan di server
