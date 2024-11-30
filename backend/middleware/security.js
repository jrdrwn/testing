const securityMiddleware = (req, res, next) => {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' https://cdnjs.cloudflare.com https://fonts.googleapis.com;");
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  };
  
  module.exports = securityMiddleware;
  