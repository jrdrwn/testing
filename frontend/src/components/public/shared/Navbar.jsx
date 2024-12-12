import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Add useNavigate
import Logo from '/logo/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add state for authentication

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/'); // Redirect to homepage after logout
  };

  return (
    <nav
      className={`bg-white fixed top-0 w-full font-poppins z-50 transition-shadow duration-300 ${
        hasScrolled ? 'shadow-md' : 'shadow-sm'
      } border-b`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <NavLink to="/" className="flex items-center">
          <img src={Logo} alt="Pintura" className="w-[125px] h-[25px] object-contain" />
        </NavLink>

        <div className="hidden md:flex space-x-6 ml-auto mr-20">
          {['Home', 'About', 'Contact', 'Pricing'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-blue-600 hover:text-blue-600 transition duration-300 text-[16px] font-light ${
                  isActive ? 'text-blue-600 font-medium' : ''
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <NavLink
                to="/dashboard/home"
                className="text-blue-600 border border-blue-600 rounded hover:bg-blue-100 transition duration-300 px-4 py-2 text-[14px]"
              >
                Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                className="bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="text-blue-600 border border-blue-600 rounded hover:bg-blue-100 transition duration-300 px-4 py-2 text-[14px]"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px]"
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        <button
          className="md:hidden text-blue-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-white shadow-md md:hidden"
        >
          <div className="flex flex-col space-y-4 p-4">
            {['Home', 'About', 'Contact', 'Pricing'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-blue-600 hover:text-blue-700 transition duration-300 text-[16px] font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </NavLink>
            ))}
            {isAuthenticated ? (
              <>
                <NavLink
                  to="/dashboard/home"
                  className="text-blue-600 border border-blue-600 rounded hover:bg-blue-100 transition duration-300 px-4 py-2 text-[14px]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px]"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="text-blue-600 border border-blue-600 rounded hover:bg-blue-100 transition duration-300 px-4 py-2 text-[14px]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
