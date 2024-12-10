const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Using optional chaining

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided.' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'defaultsecret', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden: Invalid token.' });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
