import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
  const navigate = useNavigate();

  // State untuk melacak apakah opsi adalah Monthly atau Annually
  const [isAnnual, setIsAnnual] = useState(false);

  const handleUpgradeClick = () => {
    const isLoggedIn = localStorage.getItem('token');
    if (isLoggedIn) {
      navigate('/pricing/payment');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">Friendly pricing plans</h1>
      <p className="text-gray-600 mb-6">
        Explore affordable plans tailored to support your learning and career growth. Choose the best option for your needs and unlock a world of knowledge.
      </p>

      {/* Toggle Monthly/Annually */}
      <div className="flex justify-center items-center mb-6">
        <span className="text-gray-600 mr-2">Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={() => setIsAnnual(!isAnnual)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
        <span className="text-gray-600 ml-2">Annually</span>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Basic Plan */}
        <div className="border border-gray-300 rounded-lg p-6 w-80">
          <h2 className="text-xl font-bold mb-4">Basic</h2>
          <p className="text-4xl font-bold text-gray-800 mb-2">
            {isAnnual ? (
              <>
                <span className="line-through text-gray-400">100</span>0 USD{' '}
                <span className="text-sm font-normal">/year</span>
              </>
            ) : (
              <>
                <span className="line-through text-gray-400">10</span>0 USD{' '}
                <span className="text-sm font-normal">/month</span>
              </>
            )}
          </p>
          <p className="text-gray-600 mb-4">Ideal for individual learners seeking essential resources.</p>
          <hr className="mb-4" />
          <ul className="text-left mb-6">
            <li className="flex items-center mb-2">
              <i className="fas fa-check text-blue-600 mr-2"></i>Access to over 50 courses
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check text-blue-600 mr-2"></i>Skill-based learning modules
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check text-blue-600 mr-2"></i>Basic support
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-blue-600 mr-2"></i>Access to the student community
            </li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="border border-blue-600 bg-blue-600 text-white rounded-lg p-6 w-80">
          <h2 className="text-xl font-bold mb-4">Pro</h2>
          <p className="text-4xl font-bold mb-2">
            {isAnnual ? (
              <>
                <span className="line-through text-gray-300">1188</span>99 USD{' '}
                <span className="text-sm font-normal">/year</span>
              </>
            ) : (
              <>
                <span className="line-through text-gray-300">594</span>9 USD{' '}
                <span className="text-sm font-normal">/month</span>
              </>
            )}
          </p>
          <p className="mb-4">For serious learners focused on career development with extra support.</p>
          <hr className="border-gray-300 mb-4" />
          <ul className="text-left mb-6">
            <li className="flex items-center mb-2">
              <i className="fas fa-check mr-2"></i>Access to over 500 courses
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check mr-2"></i>Resume templates and job interview prep
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check mr-2"></i>One-on-one mentoring
            </li>
            <li className="flex items-center">
              <i className="fas fa-check mr-2"></i>Priority support
            </li>
          </ul>
          <button
            onClick={handleUpgradeClick}
            className="bg-white text-blue-600 py-2 px-4 rounded-lg w-full"
          >
            Upgrade to Pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
