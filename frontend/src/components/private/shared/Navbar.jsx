import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Add useNavigate
import Logo from '../../../assets/logo/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add state for authentication

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        isDropdownOpen
      ) {
        setIsDropdownOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target) &&
        isNotificationOpen
      ) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen, isNotificationOpen]);

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
    <div>
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center">
          <img src={Logo} alt="Pintura" className="w-[125px] h-[25px] object-contain" />
        </div>

        <div className="flex items-center flex-grow mx-4">
          <input
            type="text"
            placeholder="Type a command or search..."
            className="w-full p-2 rounded-full bg-gray-100 text-gray-500"
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center text-blue-600">
            <i className="fas fa-circle"></i>
            <span className="ml-1">95 Credits</span>
          </div>

          <div className="relative" ref={notificationRef}>
            <i
              className="fas fa-bell text-blue-600 cursor-pointer"
              onClick={() => setIsNotificationOpen((prev) => !prev)}
            ></i>

            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-md border">
                <div className="px-4 py-2 text-gray-700 font-semibold border-b">
                  Notifications
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">📢 You have a new message!</p>
                </div>
              </div>
            )}
          </div>

          <div className="relative" ref={dropdownRef}>
            <img
              src="https://placehold.co/40x40"
              alt="User profile picture"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            />

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border">
                <button
                  onClick={handleLogout} // Use handleLogout function
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-8 p-4 bg-white">
        {['Home', 'My Courses', 'Workshop', 'Community', 'Setting'].map((page) => (
          <NavLink
            key={page}
            to={`/dashboard/${page.toLowerCase().replace(' ', '')}`}
            className={({ isActive }) =>
              `cursor-pointer p-2 rounded ${
                isActive ? 'bg-blue-600 text-white' : 'text-gray-500'
              }`
            }
          >
            {page}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
