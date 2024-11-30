const passport = require('passport');

exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.googleAuthCallback = (req, res, next) => {
  passport.authenticate('google', (err, user, info) => {
    if (err) {
      console.error('Authentication error:', err);
      return res.status(500).json({ message: 'Authentication failed', error: err });
    }
    if (!user) {
      console.error('No user found. Redirecting to home...');
      return res.redirect('/');
    }
    req.login(user, (err) => {
      if (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ message: 'Login failed', error: err });
      }
      console.log('User successfully logged in:', user);
      return res.redirect('/dashboard');
    });
  })(req, res, next);
};
