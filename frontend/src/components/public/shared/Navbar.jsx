import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Untuk menu hamburger di mobile
  const [hasScrolled, setHasScrolled] = useState(false); // Untuk shadow navbar saat scroll
  const menuRef = useRef(null); // Referensi untuk dropdown menu

  // Handle scroll untuk menambahkan efek shadow
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle klik di luar menu untuk menutup dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Tutup menu jika klik di luar elemen dropdown
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className={`bg-white fixed top-0 w-full font-poppins z-50 transition-shadow duration-300 ${
        hasScrolled ? 'shadow-md' : 'shadow-sm'
      } border-b`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={Logo} alt="Pintura" className="w-[125px] h-[25px] object-contain" />
        </NavLink>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6 ml-auto mr-20">
          {['Home', 'About', 'Contact', 'Pricing'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} // Pengecualian untuk Home
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

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
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
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-blue-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars text-2xl"></i> {/* Ikon hamburger */}
        </button>
      </div>

      {/* Dropdown Menu (Mobile) */}
      {isMenuOpen && (
        <div
          ref={menuRef} // Gunakan ref untuk deteksi klik di luar
          className="absolute top-full left-0 w-full bg-white shadow-md md:hidden"
        >
          <div className="flex flex-col space-y-4 p-4">
            {['Home', 'About', 'Contact', 'Pricing'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-blue-600 hover:text-blue-700 transition duration-300 text-[16px] font-light"
                onClick={() => setIsMenuOpen(false)} // Tutup menu setelah klik
              >
                {item}
              </NavLink>
            ))}
            {/* Mobile Action Buttons */}
            <NavLink
              to="/login"
              className="text-blue-600 border border-blue-600 rounded hover:bg-blue-100 transition duration-300 px-4 py-2 text-[14px]"
              onClick={() => setIsMenuOpen(false)} // Tutup menu setelah klik
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px]"
              onClick={() => setIsMenuOpen(false)} // Tutup menu setelah klik
            >
              Register
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
