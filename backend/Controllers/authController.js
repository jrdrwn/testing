const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import jwt
const db = require('../database/models'); // Correct path to your models

const { User } = db;

// Register function
const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validate input: make sure all fields are provided
    if (!firstName || !lastName || !email || !password) {
      console.error('Error: All fields are required');
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      console.error('Error: Invalid email format');
      return res.status(400).json({ message: 'Invalid email format.' });
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      console.error('Error: Email is already registered', email);
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to the database
    const newUser = await User.create({
      firstName,
      lastName,
      name: `${firstName} ${lastName}`, // Combine firstName and lastName to create name
      email,
      password: hashedPassword,
      role_id: null,  // If this is optional, you can pass null
      created_at: new Date(),
      updated_at: new Date(),  // Set created_at explicitly if necessary
      deleted_at: null, // Explicitly set deleted_at to null
    });

    console.log('User registered successfully:', newUser.email);
    return res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error during registration:', error); // Log error for debugging
    return res.status(500).json({ message: 'Internal server error, please try again later.' });
  }
};

// Login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt for email:', email);

    // Validate input
    if (!email || !password) {
      console.error('Email and password are required');
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    // Check if the user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.error('Invalid credentials for user:', email);
      return res.status(400).json({ message: 'wrong email or password.' });
    }

    // Compare the password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.error('Invalid credentials for user:', email);
      return res.status(400).json({ message: 'wrong email or password.' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.user_id, email: user.email }, process.env.JWT_SECRET || 'yourSecretKey', { expiresIn: '1h' });

    console.log('Login successful for user:', email);
    return res.status(200).json({
      message: 'Login successful.',
      token, // Send the token in the response
    });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

// logout function
const logout = async (req, res) => {
  try {
    // Implement logout functionality here
    return res.status(200).json({ message: 'Logout successful.' });
  } catch (error) {
    console.error('Error during logout:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = {
  register,
  login,
  logout,
};
