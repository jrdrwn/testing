import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('monthly');
  const [quantity, setQuantity] = useState(1);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('+62');
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState(""); // For MM
  const [expiryYear, setExpiryYear] = useState("");  // For YY
  const [cvc, setCvc] = useState("");

  // State for pop-up
  const [popupMessage, setPopupMessage] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    // Memuat file JSON
    fetch('/countries.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load countries');
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data);
        setSelectedCountry(data[0]?.code || ''); // Set default ke negara pertama
      })
      .catch((error) => {
        console.error('Error loading countries:', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/create-checkout-session', {
        email,
        phone: `${selectedCountry}${phone}`,
        subscriptionType,
        quantity,
      });
      if (response.status === 200) {
        window.location.href = response.data.url;
        setPopupMessage('Subscription successful!');
      } else {
        setPopupMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      setPopupMessage('An error occurred. Please try again.');
    }
    setPopupVisible(true);
  };
  

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const getPrice = () => {
    const basePrice = subscriptionType === 'monthly' ? 49.00 : 485.01;
    return basePrice * (quantity || 1);
  };

  const getTax = () => {
    return getPrice() * 0.10;
  };

  const getTotal = () => {
    return getPrice() + getTax();
  };
  console.log(countries); // Pastikan data terisi

  return (

    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="bg-blue-700 text-white p-12 lg:w-1/2">
        <div className="flex items-center mb-8">
          <button
        className="text-xl mr-2"
        onClick={() => navigate("/pricing")}
        aria-label="Go to pricing"
      >
        <i className="fas fa-arrow-left"></i>
      </button>
          <img src="https://placehold.co/20x20" alt="Pintura logo" className="mr-2" />
          <span className="font-bold">PINTURA</span>
        </div>
        <h3 className="text-2xl font-semibold mb-2">Subscribe to Pintura Premium</h3>

        {/* Wrapper untuk Subscription Type */}
        <div className="flex items-center mb-4">
          <label
            className="w-1/3 text-sm font-medium"
            htmlFor="subscriptionType"
          >
            Subscription Type
          </label>
          <select
            id="subscriptionType"
            className="flex-1 p-2 rounded bg-white text-black border border-gray-300"
            value={subscriptionType}
            onChange={(e) => setSubscriptionType(e.target.value)}
          >
            <option value="monthly">Monthly - US$53.09</option>
            <option value="yearly">Yearly - US$485.01</option>
          </select>
        </div>

        {/* Wrapper untuk Quantity */}
        <div className="flex items-center mb-4">
          <label
            className="w-1/3 text-sm font-medium"
            htmlFor="quantity"
          >
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            className="flex-1 p-2 rounded bg-white text-black border border-gray-300"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
          />
        </div>
        <h3 className="text-4xl font-bold mb-1">
          {`US$${getPrice().toFixed(2)}`}{' '}
          <span className="text-lg font-normal">
            {subscriptionType === 'monthly' ? 'per month' : 'per year'}
          </span>
        </h3>
        <div className="flex items-center mb-4 mt-2">
          <img src="https://placehold.co/50x50" alt="Pintura Premium" className="w-12 h-12 mr-4" />
          <div>
            <p className="font-semibold">Pintura Premium</p>
            <p className="text-sm">Pintura's premium is the best choice for you</p>
            <p className="text-sm">Qty <span className="font-semibold">{quantity}</span> Billed {subscriptionType}</p>
          </div>
          <p className="ml-auto font-semibold">
            {`US$${getPrice().toFixed(2)}`}
          </p>
        </div>
        <div className="border-t border-white my-4"></div>
        <div className="flex justify-between mb-4">
          <p>Subtotal</p>
          <p>{`US$${getPrice().toFixed(2)}`}</p>
        </div>
        <button className="bg-blue-800 text-white py-2 px-4 rounded mb-4">Add promotion code</button>
        <div className="flex justify-between mb-4">
          <p>Sales tax (10%)</p>
          <p>{`US$${getTax().toFixed(2)}`}</p>
        </div>
        <div className="border-t border-white my-4"></div>
        <div className="flex justify-between font-bold">
          <p>Total due today</p>
          <p>{`US$${getTotal().toFixed(2)}`}</p>
        </div>
      </div>
      <div className="bg-white p-14 lg:w-1/2">
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
            <div className="flex mb-2">
              <select
                className="border border-gray-300 p-2 rounded mr-2"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name} ({country.code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                className="flex-1 border border-gray-300 p-2 rounded"
                placeholder="812345678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onKeyDown={(e) => {
                  if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                    e.preventDefault(); // Mencegah input selain angka
                  }
                }}
                pattern="^\d{9,13}$"
                required
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-4">Payment</h2>

          {/* Card Information */}
          <div className="border border-gray-300 p-4 rounded mb-4">
      <div className="flex items-center mb-4">
        <i className="fas fa-credit-card mr-2"></i>
        <p className="font-semibold">Card Information</p>
      </div>
      {/* Card Number */}
      <div className="relative">
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded mb-2"
          placeholder="1234 1234 1234 1234"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
          maxLength={16}
        />
        {/* Visa/MasterCard Icon */}
        <div className="absolute right-2 top-2 flex space-x-2">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
    alt="Visa"
    className="h-5"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
    alt="MasterCard"
    className="h-5"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/800px-American_Express_logo_%282018%29.svg.png"
    alt="American Express"
    className="h-5"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/id/3/3c/Currentdiscover.jpg"
    alt="Discover"
    className="h-5"
  />
</div>

      </div>
      {/* MM / YY */}
      <div className="flex mb-2">
        <input
          type="text"
          className="w-1/2 border border-gray-300 p-2 rounded mr-2"
          placeholder="MM"
          value={expiryMonth}
          onChange={(e) => setExpiryMonth(e.target.value.replace(/\D/g, ""))}
          maxLength={2}
        />
        <input
          type="text"
          className="w-1/2 border border-gray-300 p-2 rounded"
          placeholder="YY"
          value={expiryYear}
          onChange={(e) => setExpiryYear(e.target.value.replace(/\D/g, ""))}
          maxLength={2}
        />
      </div>
      {/* CVC */}
      <input
        type="text"
        className="w-full border border-gray-300 p-2 rounded mb-2"
        placeholder="CVC"
        value={cvc}
        onChange={(e) => setCvc(e.target.value.replace(/\D/g, ""))}
        maxLength={3}
      />
      {/* Full Name */}
      <input
        type="text"
        className="w-full border border-gray-300 p-2 rounded mb-2"
        placeholder="Full name on card"
      />
      {/* Country and Address */}
      <div className="flex mb-2">
      <select className="w-1/2 border border-gray-300 p-2 rounded mr-2">
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="w-1/2 border border-gray-300 p-2 rounded"
        placeholder="Address"
      />
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
 
 {popupVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold">{popupMessage}</h3>
            <button
              onClick={handleClosePopup}
              className="mt-4 w-full bg-blue-800 text-white py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}


    </div>
  );
};

export default Payment;
