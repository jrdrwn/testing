import axios from 'axios';
import { useState } from 'react';

const payment = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('monthly');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/create-checkout-session', {
        email,
        phone,
        subscriptionType,
      });
      window.location.href = response.data.url;
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="bg-blue-700 text-white p-8 lg:w-1/2">
        <div className="flex items-center mb-8">
          <i className="fas fa-arrow-left mr-4"></i>
          <h1 className="text-2xl font-bold">PINTURA</h1>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Subscribe to Pintura Premium</h2>
        <select
          className="mb-4 p-2 rounded"
          value={subscriptionType}
          onChange={(e) => setSubscriptionType(e.target.value)}
        >
          <option value="monthly">Monthly - US$53.09</option>
          <option value="yearly">Yearly - US$485.01</option>
        </select>
        <h3 className="text-4xl font-bold mb-1">
          {subscriptionType === 'monthly' ? 'US$49.00' : 'US$485.01'}{' '}
          <span className="text-lg font-normal">
            {subscriptionType === 'monthly' ? 'per month' : 'per year'}
          </span>
        </h3>
        <div className="flex items-center mb-4">
          <img src="https://placehold.co/50x50" alt="Pintura Premium" className="w-12 h-12 mr-4"/>
          <div>
            <p className="font-semibold">Pintura Premium</p>
            <p className="text-sm">Pintura's premium the best choice for you</p>
            <p className="text-sm">Qty <span className="font-semibold">1</span> Billed {subscriptionType}</p>
          </div>
          <p className="ml-auto font-semibold">
            {subscriptionType === 'monthly' ? 'US$49.00' : 'US$485.01'}
          </p>
        </div>
        <div className="border-t border-white my-4"></div>
        <div className="flex justify-between mb-4">
          <p>Subtotal</p>
          <p>{subscriptionType === 'monthly' ? 'US$49.00' : 'US$485.01'}</p>
        </div>
        <button className="bg-blue-800 text-white py-2 px-4 rounded mb-4">Add promotion code</button>
        <div className="flex justify-between mb-4">
          <p>Sales tax (10%)</p>
          <p>{subscriptionType === 'monthly' ? 'US$4.09' : 'US$44.55'}</p>
        </div>
        <div className="border-t border-white my-4"></div>
        <div className="flex justify-between font-bold">
          <p>Total due today</p>
          <p>{subscriptionType === 'monthly' ? 'US$53.09' : 'US$529.56'}</p>
        </div>
      </div>
      <div className="bg-white p-8 lg:w-1/2">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Contact Information</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded mb-2"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="(+62)812345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <h2 className="text-xl font-semibold mb-4">Payment</h2>
          <div className="border border-gray-300 p-4 rounded mb-4">
            <div className="flex items-center mb-4">
              <i className="fas fa-credit-card mr-2"></i>
              <p className="font-semibold">Card Information</p>
            </div>
            <input type="text" className="w-full border border-gray-300 p-2 rounded mb-2" placeholder="1234 1234 1234 1234"/>
            <div className="flex mb-2">
              <input type="text" className="w-1/2 border border-gray-300 p-2 rounded mr-2" placeholder="MM / YY"/>
              <input type="text" className="w-1/2 border border-gray-300 p-2 rounded" placeholder="CVC"/>
            </div>
            <input type="text" className="w-full border border-gray-300 p-2 rounded mb-2" placeholder="Full name on card"/>
            <div className="flex mb-2">
              <select className="w-1/2 border border-gray-300 p-2 rounded mr-2">
                <option>Indonesia</option>
              </select>
              <input type="text" className="w-1/2 border border-gray-300 p-2 rounded" placeholder="Address"/>
            </div>
          </div>
          <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded w-full mb-4">Subscribe</button>
        </form>
        <p className="text-sm text-gray-600 mb-4">By confirming your subscription, you allow Pintura to charge you for future payments in accordance with their terms. You can always cancel your subscription.</p>
        <a href="#" className="text-blue-700 text-sm mb-4 block">Eligible for a refund</a>
        <div className="text-sm text-gray-600">
          <p>Powered by <span className="font-semibold">stripe</span></p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Legal</a>
            <a href="#" className="hover:underline">Refunds</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default payment;
