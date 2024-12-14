// Payment.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import iconlogo from "/logo/Logo Icon Blue.svg";
import ContactInformation from "../../../components/public/Payment/ContactInformation";
import CardInformation from "../../../components/public/Payment/CardInformation";

const Payment = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("monthly");
  const [quantity, setQuantity] = useState(1);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("+62");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState(""); // For MM
  const [expiryYear, setExpiryYear] = useState(""); // For YY
  const [cvc, setCvc] = useState("");

  // State for pop-up
  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");


  const navigate = useNavigate();

 const decodeToken = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  useEffect(() => {
    // Ambil email dari token di localStorage
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken && decodedToken.email) {
        setEmail(decodedToken.email);
      } else {
        console.error("Invalid token or missing email");
        navigate("/login");
      }
    } else {
      console.error("No token found");
      navigate("/login");
    }

    // Ambil daftar negara
    fetch("/countries.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load countries");
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data);
        const indonesia = data.find((country) => country.name === "Indonesia");
        setSelectedCountry(indonesia?.code || "+62");
      })
      .catch((error) => {
        console.error("Error loading countries:", error);
      });
  }, [navigate]);

  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/create-checkout-session", {
        email,
        phone: `${selectedCountry}${phone}`,
        subscriptionType,
        quantity,
      });
      if (response.status === 200) {
        setPopupMessage("Subscription successful!");
        setRedirectUrl(response.data.url);
      } else {
        setPopupMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      setPopupMessage("An error occurred. Please try again.");
    }
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    if (redirectUrl) {
      window.location.href = redirectUrl; // Redirect setelah user mengklik "Okay"
    }
  };

  const getPrice = () => {
    const basePrice = subscriptionType === "monthly" ? 2.0 : 9.0;
    return basePrice * (quantity || 1);
  };

  const getTax = () => {
    return getPrice() * 0.1;
  };

  const getTotal = () => {
    return getPrice() + getTax();
  };

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
          <img src={iconlogo} alt="Pintura logo" className="mr-2 w-5 h-5" />
          <span className="font-bold">PINTURA</span>
        </div>
        <h3 className="text-2xl font-semibold mb-2">
          Subscribe to Pintura Premium
        </h3>

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
            <option value="monthly">Monthly - US$2.0</option>
            <option value="yearly">Yearly - US$9.0</option>
          </select>
        </div>

        {/* Wrapper untuk Quantity */}
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-sm font-medium" htmlFor="quantity">
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
          {`US$${getPrice().toFixed(2)}`}{" "}
          <span className="text-lg font-normal">
            {subscriptionType === "monthly" ? "per month" : "per year"}
          </span>
        </h3>
        <div className="flex items-center mb-4 mt-2">
          <img
            src={iconlogo}
            alt="Pintura Premium"
            className="w-12 h-12 mr-4"
          />
          <div>
            <p className="font-semibold">Pintura Premium</p>
            <p className="text-sm">
              Pintura's premium is the best choice for you
            </p>
            <p className="text-sm">
              Qty <span className="font-semibold">{quantity}</span> Billed{" "}
              {subscriptionType}
            </p>
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
        <button className="bg-blue-800 text-white py-2 px-4 rounded mb-4">
          Add promotion code
        </button>
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
          <ContactInformation
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            countries={countries}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
          <h2 className="text-xl font-semibold mb-4">Payment</h2>

          <CardInformation
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            expiryMonth={expiryMonth}
            setExpiryMonth={setExpiryMonth}
            expiryYear={expiryYear}
            setExpiryYear={setExpiryYear}
            cvc={cvc}
            setCvc={setCvc}
            countries={countries}
          />

          <button
            type="submit"
            className="bg-blue-700 text-white py-2 px-4 rounded w-full mb-4"
          >
            Subscribe
          </button>
        </form>
        <p className="text-sm text-gray-600 mb-4">
          By confirming your subscription, you allow Pintura to charge you for
          future payments in accordance with their terms. You can always cancel
          your subscription.
        </p>
        <a href="#" className="text-blue-700 text-sm mb-4 block">
          Eligible for a refund
        </a>
        <div className="text-sm text-gray-600">
          <p>
            Powered by <span className="font-semibold">stripe</span>
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Legal
            </a>
            <a href="#" className="hover:underline">
              Refunds
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
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
