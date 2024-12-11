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
const { getMyCourses, getMyCoursesComplete, authenticateToken } = require('../Controllers/courseController');
const careerController = require('../Controllers/careerController'); 
const videocareerController = require('../Controllers/videocareerController'); 
const { authenticate,  completeProfile, getProfile, getSocialMedia, completeSocialMedia, updateUserProfile } = require('../Controllers/userprofileController');
const articledetailController = require("../Controllers/articledetailController");
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
router.get('/mycourses',authenticateToken, getMyCourses);

// Route untuk mendapatkan kursus user
router.get('/mycourses/:userId/completed', getMyCoursesComplete);

// Route untuk mendapatkan data user profil
router.post('/userprofiles', authenticate, completeProfile);

router.get('/profile', authenticate, getProfile);

// Route untuk mendapatkan data sosial media user
router.put('/profile/social', authenticate, completeSocialMedia);

router.get('/socialmedia', authenticate, getSocialMedia);

router.put('profile', updateUserProfile);

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

// Route to get video content
router.get('/api/auth/videoContents', careerController.getVideos);
// Route to get all video contents with related video information
router.get("/api/videos", videocareerController.getAllVideos);

// Route to get a single video content by ID with related video information
router.get("/api/videos/:id", videocareerController.getVideoById);


// Route to get articles
router.get('/api/articles', careerController.getArticles);
// Route for articlecontent
router.get('/api/articlecontent', careerController.getArticleContents);
// Route untuk mendapatkan semua data artikel author beserta artikel terkait
router.get("/api/article-authors", articledetailController.getAllAuthors);
// Route untuk mendapatkan satu data artikel author berdasarkan ID beserta artikel terkait
router.get("/api/article-authors/:id", articledetailController.getAuthorById);


module.exports = router;
