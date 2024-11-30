const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/routes'); // Import routes
const db = require('./database/models'); // Import database models

const app = express();

// Middleware
app.use(bodyParser.json()); // Untuk memproses JSON
app.use(bodyParser.urlencoded({ extended: true })); // Untuk memproses form-urlencoded

// Routes
app.use('/api/auth', authRoutes); // Prefix for auth routes

// Database connection
db.sequelize.authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch(err => console.error('Database connection failed:', err));

// ...existing code...
