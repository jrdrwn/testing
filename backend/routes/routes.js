const express = require('express');
const passport = require('passport'); // Add this line
const { register, login, logout } = require('../Controllers/authController');
const googleController = require('../Controllers/googleController');
const { console } = require('node:inspector/promises');

const router = express.Router();

router.post('/register', (req, res, next) => {
  console.log('Register route hit');
  next();
}, register);

router.post('/login', (req, res, next) => {
  console.log('Login route hit');
  next();
}, login);

// logout
router.post('/logout', (req, res, next) => {
  console.log('Logout route hit');
  next();
}, logout);

/* // update profile
router.put('/profile', (req, res, next) => {
  console.log('Update profile route hit');
  next();
}, updateProfile);

// get profile
router.get('/profile', (req, res, next) => {
  console.log('Get profile route hit');
  next();
}, getProfile);

// get all users
router.get('/users', (req, res, next) => {
  console.log('Get all users route hit');
  next();
}, getUsers);

// get user by id
router.get('/users/:id', (req, res, next) => {
  console.log('Get user by id route hit');
  next();
}, getUserById);

// update user by id
router.put('/users/:id', (req, res, next) => {
  console.log('Update user by id route hit');
  next();
}, updateUserById);

// delete user by id
router.delete('/users/:id', (req, res, next) => {
  console.log('Delete user by id route hit');
  next();
}, deleteUserById);

// create order
router.post('/orders', (req,res,next)=>{
  console.log('new order created')
  next();
}, orders);

// get all orders
router.get('/orders', (req,res,next)=>{
  console.log('get all orders')
  next();
}, getOrders);

// get order by id
router.get('/orders/:id', (req,res,next)=>{
  console.log('get order by id')
  next();
}
, getOrderById);

// update order by id
router.put('/orders/:id', (req,res,next)=>{
  console.log('update order by id')
  next();
}, updateOrderById);

// delete order by id
router.delete('/orders/:id', (req,res,next)=>{
  console.log('delete order by id')
  next();
}, deleteOrderById);

// get course by id
router.get('/courses/:id', (req,res,next)=>{
  console.log('get course by id')
  next();
}, getCourseById);

// get all courses
router.get('/courses', (req,res,next)=>{
  console.log('get all courses')
  next();
}, getCourses);

// create course
router.post('/courses', (req,res,next)=>{
  console.log('create course')
  next();
}, createCourse);

// update course by id
router.put('/courses/:id', (req,res,next)=>{
  console.log('update course by id')
  next();
}, updateCourseById);

// delete course by id
router.delete('/courses/:id', (req,res,next)=>{
  console.log('delete course by id')
  next();
}, deleteCourseById);

// payment
router.post('/payment', (req,res,next)=>{
  console.log('payment')
  next();
}, payment);
 */
// Define routes for Google OAuth
router.get('/google-register', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }), 
  function(req, res) {
    res.redirect('/dashboard');
  }
);

// Define routes for Google OAuth
router.get('/auth/google', googleController.googleAuth);
router.get('/auth/google/callback', googleController.googleAuthCallback);

// Handle SSL errors
router.use((err, req, res, next) => {
  if (err.code === 'ERR_SSL_PROTOCOL_ERROR') {
    console.error('SSL Protocol Error:', err);
    res.status(500).json({ message: 'SSL Protocol Error' });
  } else {
    next(err);
  }
});

module.exports = router;
