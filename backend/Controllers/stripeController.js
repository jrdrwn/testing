require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { StripeTransaction, User } = require('../database/models');
const nodemailer = require('nodemailer');

// Setup transporter untuk mengirim email dengan SSL
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465, // Gunakan port 465 untuk SSL
  secure: true, // Menggunakan SSL
  auth: {
    user: process.env.EMAIL_USER, // Email pengirim
    pass: process.env.EMAIL_PASSWORD, // Password atau App Password
  },
});

// Fungsi untuk mengirim email
const sendEmail = (to, subject, text, html) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions);
};

// Create Checkout Session
const createCheckoutSession = async (req, res) => {
  try {
    const { email, subscriptionType, quantity, phone } = req.body;

    // Cek apakah pengguna ada di database
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.error('User not found:', email);
      return res.status(400).send('Email not found in users database');
    }

    // Tentukan produk berdasarkan tipe langganan
    const productId = subscriptionType === 'yearly' 
      ? 'prod_ROX34uKpDGdDGH'  // ID produk tahunan
      : 'prod_ROX4qnS1HVBKGV';  // ID produk bulanan

    // Ambil harga terkait produk yang dipilih
    const prices = await stripe.prices.list({
      product: productId,
      expand: ['data.product'],
    });

    // Pastikan harga ditemukan
    if (prices.data.length === 0) {
      console.error('No prices found for the selected product');
      return res.status(400).send('No prices found for the selected product');
    }

    // Buat sesi checkout di Stripe
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: 'auto',
      line_items: [
        {
          price: prices.data[0].id,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.APP_URL}:${process.env.HTTPS_PORT}/dashboard/home?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.APP_URL}:${process.env.HTTPS_PORT}?canceled=true`,
      metadata: {
        email,         // Menyimpan email pengguna
        phone,         // Menyimpan nomor telepon
        quantity,       // Menyimpan informasi kualitas
        name: user.name, // Menyimpan nama pengguna
      },
    });

    // Simpan transaksi ke database
    await StripeTransaction.create({
      user_id: user.user_id,  
      name: user.name, 
      phone,         
      session_id: session.id,
      amount: prices.data[0].unit_amount,
      quantity,       
      status: 'Success',
    });

    // Kirim email notifikasi kepada pengguna
    const subject = `Pintura Subscription - ${subscriptionType.charAt(0).toUpperCase() + subscriptionType.slice(1)} Plan`;
    const text = `Dear ${user.name},\n\nYour subscription to the Pintura ${subscriptionType} plan is being processed. We'll notify you once the payment is confirmed.\n\nThank you for choosing Pintura!`;
    const html = `<p>Dear ${user.name},</p><p>Your subscription to the Pintura ${subscriptionType} plan is being processed. We'll notify you once the payment is confirmed.</p><p>Thank you for choosing Pintura!</p>`;

    // Kirim email
    await sendEmail(user.email, subject, text, html);

    // Redirect pengguna ke /dashboard/home
    res.status(200).json({ url: `${process.env.APP_URL}:${process.env.HTTPS_PORT}/dashboard/home?success=true&session_id=${session.id}` });
  } catch (err) {
    console.error('Error creating checkout session: ', err);
    res.status(500).send('Internal Server Error');
  }
};

// Create Billing Portal Session
const createPortalSession = async (req, res) => {
  try {
    const { session_id } = req.body;
    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);
    const returnUrl = `${process.env.APP_URL}:${process.env.HTTPS_PORT}`;

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: checkoutSession.customer,
      return_url: returnUrl,
    });

    res.redirect(303, portalSession.url);
  } catch (err) {
    console.error('Error creating portal session: ', err);
    res.status(500).send('Internal Server Error');
  }
};

// Get All Stripe Transactions
const getAllStripeTransactions = async (req, res) => {
  try {
    const transactions = await StripeTransaction.findAll();
    res.status(200).json(transactions);
  } catch (err) {
    console.error('Error fetching Stripe transactions: ', err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  createCheckoutSession,
  createPortalSession,
  getAllStripeTransactions,
};
