import React from 'react';

const PricingCard = ({ title, price, oldPrice, features, buttonText, isPopular }) => (
  <div className={`border ${isPopular ? 'border-blue-500' : 'border-gray-300'} rounded-lg p-6 w-full md:w-1/3`}>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="text-4xl font-bold mb-2">
      {oldPrice && <span className="line-through text-gray-500 mr-2">{oldPrice}</span>}
      {price}
      <span className="text-lg font-normal"> USD</span>
    </div>
    <p className="text-gray-600 mb-4">per user</p>
    <p className="text-gray-600 mb-4">{features.description}</p>
    <hr className="my-4" />
    <ul className="mb-6">
      {features.items.map((item, index) => (
        <li key={index} className="flex items-center mb-2">
          <i className="fas fa-check text-blue-500 mr-2"></i>
          {item}
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-2 rounded-lg ${
        isPopular ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-500'
      } font-semibold`}
    >
      {buttonText}
    </button>
  </div>
);

const PricingSection = () => (
  <div className="flex flex-col items-center p-8">
    <h1 className="title text-3xl font-bold text-blue-600 mb-4">Friendly pricing plans</h1>
    <p className="text-gray-600 text-center mb-8">
      Explore affordable plans tailored to support your learning and career growth. Choose the best option for your needs
      and unlock a world of knowledge.
    </p>
    <div className="flex items-center mb-8">
      <span className="text-gray-600 mr-2">Monthly</span>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <span className="text-gray-600 ml-2">Annually</span>
    </div>
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-4xl">
      <PricingCard
        title="Basic"
        price="100"
        oldPrice="100"
        features={{
          description: 'Ideal for individual learners seeking essential resources.',
          items: [
            'Access to over 50 courses',
            'Skill-based learning modules',
            'Basic support',
            'Access to the student community',
          ],
        }}
        buttonText="Upgrade to Basic →"
      />
      <PricingCard
        title="Pro"
        price="49"
        oldPrice="59"
        features={{
          description: 'For serious learners focused on career development with extra support.',
          items: [
            'Access to over 500 courses',
            'Resume templates and job interview prep',
            'One-on-one mentoring',
            'Priority support',
          ],
        }}
        buttonText="Upgrade to Plus →"
        isPopular={true}
      />
      <PricingCard
        title="Premium"
        price="99"
        oldPrice="109"
        features={{
          description: 'Designed for professionals who need comprehensive learning and personalized guidance.',
          items: [
            'Unlimited course access',
            'Exclusive career resources and templates',
            'Personalized mentorship sessions',
            'Premium support',
          ],
        }}
        buttonText="Upgrade to Premium →"
      />
    </div>
  </div>
);

export default PricingSection;
