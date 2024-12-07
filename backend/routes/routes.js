const express = require('express');
const passport = require('passport'); // Add this line
const { register, login, logout } = require('../Controllers/authController');
const googleController = require('../Controllers/googleController');
const { console } = require('node:inspector/promises');
const { getAllCourses } = require('../Controllers/courseController');
const stripeController = require('../Controllers/stripeController');
const emailController = require('../Controllers/emailController');
const upload = require('../middleware/multerConfig');
const { addCourse } = require('../Controllers/courseController');
const { getAllStripeTransactions } = require('../Controllers/stripeController');
const { getMyCourses, getMyCoursesComplete } = require('../Controllers/courseController');
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

// get all courses
router.get('/courses', (req,res,next)=>{
  console.log('get all courses')
  next();
}, getAllCourses);

// addCourse
router.post('/courses', upload.single('image'), addCourse);

// Route untuk mendapatkan kursus user
router.get('/mycourses/:userId', getMyCourses);

// Route untuk mendapatkan kursus user
router.get('/mycourses/:userId/completed', getMyCoursesComplete);

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

// Route untuk membuat checkout session
router.post('/api/create-checkout-session', stripeController.createCheckoutSession);

// Route untuk membuat billing portal session
router.post('/api/create-portal-session', stripeController.createPortalSession);

// Route to get all Stripe transactions
router.get('/api/stripe-transactions', getAllStripeTransactions);

// Define routes for Google OAuth
router.get('/google-register', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Rute untuk autentikasi Google
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Rute untuk menangani callback Google
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

// Verifikasi email routes
router.post('/api/auth/send-verification', emailController.sendVerificationCode);
router.post('/api/auth/verify-code', emailController.verifyCode);

// Forgot password routes
router.post('/api/auth/forgot-password', emailController.forgotPassword);
router.post('/api/auth/reset-password', emailController.resetPassword);

router.post('/api/auth/verify-reset-code', emailController.verifyResetCode);

module.exports = router;
