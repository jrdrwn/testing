const passport = require('passport');
const { User } = require('../database/models'); // Sesuaikan dengan path model Anda

exports.googleAuthCallback = async (req, res, next) => {
  passport.authenticate('google', async (err, user, info) => {
    if (err) {
      console.error('Authentication error:', err);
      return res.status(500).json({ message: 'Authentication failed', error: err });
    }
  
    if (!user) {
      console.error('No user found. Redirecting to home...');
      return res.redirect('/'); // Redirect if no user found
    }
  
    // If you want to skip the login logic, simply respond here
    try {
      // Check if the user already exists by googleId
      let existingUser = await User.findOne({ where: { google_id: user.google_id } });
  
      if (existingUser) {
        // Ensure req.session is defined before setting req.session.user
        if (req.session) {
          req.session.user = existingUser;  // This is an example, make sure your session middleware is set up
          console.log('User found, user session created:', existingUser);
        } else {
          console.error('Session is not defined. Please ensure session middleware is set up correctly.');
        }
        
        return res.redirect('/dashboard/home'); // Redirect to the dashboard after authentication
      } else {
        // If the user does not exist, you can either create a new user or redirect
        console.error('User not found. Redirecting to home...');
        return res.redirect('/'); // Redirect to homepage if no user is found
      }
    } catch (error) {
      console.error('Error during Google callback handling:', error);
      return next(error); // Pass error to the next error handler
    }
  
  })(req, res, next);
  
};
