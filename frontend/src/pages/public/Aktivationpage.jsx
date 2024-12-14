import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../assets/public/imgActivationPage.svg';

const ActivationPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Cek apakah token sudah ada di localStorage, menandakan bahwa user sudah login
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      navigate('/dashboard/home'); // Redirect ke dashboard jika sudah login
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di frontend, kita sudah harusnya memiliki token, jadi kita langsung set token di localStorage
    localStorage.setItem('token', 'your-generated-jwt-token'); // Simulasikan token yang diterima dari backend
    navigate('/dashboard/home');
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen font-poppins">
      <div className="flex w-full max-w-4xl">
        {/* Bagian Gambar */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Img}
            alt="Illustration of a person holding a trophy with various icons around"
            className="w-3/4 md:w-full"
            height="400"
            width="400"
          />
        </div>

        {/* Bagian Konten */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
	<Link
            to="/"
            className="flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] w-20 mb-6"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back
          </Link>
          <h1 className="text-4xl font-bold text-blue-700 mb-2">Activation Success</h1>
          <p className="text-gray-600 mb-6">
            Congratulations! Your account has been successfully activated. You are now logged in and can access your dashboard.
          </p>
          
          {/* Formulir dan tombol */}
          {!isLoggedIn && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
                >
                  Go to Dashboard
                </button>
		<p className="text-center text-gray-600 mt-4">
                Need help? <a href="#" className="text-blue-600">Contact Support</a>
              </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivationPage;
