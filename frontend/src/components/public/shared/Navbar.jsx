import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b fixed top-0 w-full font-poppins z-50">
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
        <div className="flex items-center space-x-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
