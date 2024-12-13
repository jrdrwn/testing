import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '/logo/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState({
    image_url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", // default image
    username: ""
  });

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
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("https://localhost:5000/api/auth/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Gagal mendapatkan data profil");
        }

        const data = await response.json();
        setProfile({
          image_url: data.image_url || profile.image_url, // Gunakan default jika tidak ada
          username: data.username || ""
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (isAuthenticated) {
      fetchProfile();
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Pintura" className="w-[125px] h-[25px] object-contain" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex items-center flex-grow mx-4">
            <input
              type="text"
              placeholder="Type a command or search..."
              className="w-full p-2 rounded-full bg-gray-100 text-gray-500"
            />
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-blue-600">
              <i className="fas fa-circle"></i>
              <span className="ml-1">95 Credits</span>
            </div>

            {/* Notifications */}
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

            {/* User Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <img
                src={profile.image_url}
                alt={`Foto profil ${profile.username}`}
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              />

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8 p-4 bg-white border-t">
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="block md:hidden p-4 bg-white shadow-md mt-[4rem]">
          <input
            type="text"
            placeholder="Type a command or search..."
            className="w-full mb-4 p-2 rounded-full bg-gray-100 text-gray-500"
          />
          <nav className="space-y-2">
            {['Home', 'My Courses', 'Workshop', 'Community', 'Setting'].map((page) => (
              <NavLink
                key={page}
                to={`/dashboard/${page.toLowerCase().replace(' ', '')}`}
                className={({ isActive }) =>
                  `block p-2 rounded ${
                    isActive ? 'bg-blue-600 text-white' : 'text-gray-500'
                  }`
                }
              >
                {page}
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      {/* Spacer */}
      <div className="pt-[9rem]"></div>
    </>
  );
};

export default Navbar;  
