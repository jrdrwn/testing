const loggingMiddleware = (req, res, next) => {
    console.log('Request Details:');
    console.log(`[IP]: ${req.ip}`);
    console.log(`[Origin]: ${req.headers.origin}`);
    console.log(`[Method]: ${req.method}`);
    console.log(`[URL]: ${req.originalUrl}`);
    console.log(`[Headers]:`, req.headers);
    next();
  };
  
  module.exports = loggingMiddleware;
  