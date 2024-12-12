import React from "react";

const CardInformation = ({
  cardNumber,
  setCardNumber,
  expiryMonth,
  setExpiryMonth,
  expiryYear,
  setExpiryYear,
  cvc,
  setCvc,
  countries,
}) => {
  return (
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
  );
};

export default CardInformation;
