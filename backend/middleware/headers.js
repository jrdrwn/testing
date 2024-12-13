const headersMiddleware = (req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; " +
      "script-src 'self' https://cdnjs.cloudflare.com https://fonts.googleapis.com https://www.youtube.com; " +  // Allow YouTube scripts
      "style-src 'self' https://cdnjs.cloudflare.com https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com data:; " +  // Allow fonts from data: and trusted sources
      "img-src 'self' data: https: https://www.youtube.com; " +  // Allow images from YouTube (thumbnails)
      "connect-src 'self' https://localhost:5000; " +  // Add your backend API URL here
      "frame-src 'self' https://www.youtube.com; " +  // Allow embedding YouTube videos
      "frame-ancestors 'none';"
  );
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
};

module.exports = headersMiddleware;
