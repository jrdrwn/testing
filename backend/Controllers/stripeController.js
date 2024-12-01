require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create Checkout Session
const createCheckoutSession = async (req, res) => {
  try {
    const prices = await stripe.prices.list({
      lookup_keys: [req.body.lookup_key],
      expand: ['data.product'],
    });
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: 'auto',
      line_items: [
        {
          price: prices.data[0].id,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.APP_URL}:${process.env.HTTPS_PORT}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.APP_URL}:${process.env.HTTPS_PORT}?canceled=true`,
    });

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

// Webhook Handler for Stripe Events
const handleWebhook = (req, res) => {
  const signature = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log(`⚠️ Webhook signature verification failed.`, err.message);
    return res.status(400).send('Webhook Error');
  }

  switch (event.type) {
    case 'customer.subscription.trial_will_end':
    case 'customer.subscription.deleted':
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
      const subscription = event.data.object;
      console.log(`Subscription status is ${subscription.status}.`);
      break;
    default:
      console.log(`Unhandled event type ${event.type}.`);
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send();
};

module.exports = {
  createCheckoutSession,
  createPortalSession,
  handleWebhook,
};
