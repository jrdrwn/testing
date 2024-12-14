import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Img from '../../assets/public/imgregisterpage.svg';


const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset error message
    setError('');

    // Validate password
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const userData = {
      firstName,
      lastName,
      name: `${firstName} ${lastName}`,
      email,
      password,
    };

    setLoading(true);

    try {
      const response = await fetch('https://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // Save email for verification page
        localStorage.setItem('verificationEmail', email);
        
        // Send OTP code
        await fetch('https://localhost:5000/api/auth/send-verification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        navigate('/VerificationPage');
      } else {
        setError(data.message || 'An error occurred');
      }
    } catch (error) {
      setError('A server error occurred');
    } finally {
      setLoading(false);
    }
  };


  return (
    <body className="bg-white flex items-center justify-center min-h-screen font-poppins">
      <div className="flex w-full max-w-4xl">
        <div className="w-1/2 flex items-center justify-center">
          <img
            alt="Illustration of a person walking"
            className="w-3/4"
            height="400"
            src={Img}
            width="400"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center p-8">
          <Link to="/" className="flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] w-20 mb-6">
            <i className="fas fa-arrow-left mr-2"></i>Back
          </Link>
          <h1 className="text-4xl font-bold text-blue-700 mb-2">Register</h1>
          <p className="text-gray-600 mb-6">Fill out the form below to create your account.</p>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <div className="flex">
                <i className="fas fa-exclamation-circle mt-1 mr-2"></i>
                <span>{error}</span>
              </div>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-gray-400"></i>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="First Name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-gray-400"></i>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Last Name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-gray-400"></i>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-400"></i>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-400"></i>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>

          <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>
            

          <p className="mt-2 text-center text-sm text-gray-600">
            Have an Account?{' '}
            <Link className="font-medium text-blue-600 hover:text-blue-500" to="/login">
              Sign in Now.
            </Link>
          </p>
        </div>
      </div>
    </body>
  );
};

export default RegisterPage;
