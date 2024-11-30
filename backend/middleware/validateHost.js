const validateHostMiddleware = (req, res, next) => {
    const allowedHosts = ['localhost', '127.0.0.1', 'yourdomain.com'];
  
    if (!allowedHosts.includes(req.hostname)) {
      console.warn(`Blocked request with invalid Host header: ${req.hostname}`);
      return res.status(400).json({ message: 'Invalid Host header' });
    }
  
    next();
  };
  
  module.exports = validateHostMiddleware;
  