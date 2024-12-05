require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { StripeTransaction, User } = require('../database/models');

// Create Checkout Session
const createCheckoutSession = async (req, res) => {
  try {
    const { email, subscriptionType, quality, phone } = req.body;

    // Check if the email exists in the users table
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.error('User not found:', email);
      return res.status(400).send('Email not found in users database');
    }

    // Tentukan produk berdasarkan tipe langganan
    const productId = subscriptionType === 'yearly' 
      ? 'prod_RL83RXttwmGLU6'  // ID produk tahunan
      : 'prod_RL82TAeERAKwnN';  // ID produk bulanan

    // Ambil harga terkait dengan produk yang dipilih
    const prices = await stripe.prices.list({
      product: productId,  // Filter harga berdasarkan produk
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
          price: prices.data[0].id, // ID harga yang dipilih
          quantity: 1,
        },
      ],
      mode: 'subscription', // Mode untuk langganan
      success_url: `${process.env.APP_URL}:${process.env.HTTPS_PORT}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.APP_URL}:${process.env.HTTPS_PORT}?canceled=true`,
      metadata: {
        email,         // Menyimpan email pengguna
        phone,         // Menyimpan nomor telepon
        quality,       // Menyimpan informasi kualitas
        name: user.name, // Menyimpan nama pengguna
      },
    });

    // Simpan transaksi ke database
    await StripeTransaction.create({
      user_id: user.user_id,  // Ensure the correct field name is used
      name: user.name, // Menyimpan nama pengguna
      phone,         // Menyimpan nomor telepon
      session_id: session.id,
      amount: prices.data[0].unit_amount,
      quality,       // Menyimpan kualitas yang dipilih
      status: 'Success',
      
      
    });

    // Redirect pengguna ke Stripe Checkout
    res.redirect(303, session.url);
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
