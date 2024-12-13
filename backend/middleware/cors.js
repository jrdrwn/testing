const cors = require('cors');

const allowedOrigins = ['https://localhost:3000', 'https://localhost:5000', 'http://localhost:5173', 'https://pintura-3a16b.web.app'];

const corsMiddleware = cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`Blocked by CORS: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
});

module.exports = corsMiddleware;
