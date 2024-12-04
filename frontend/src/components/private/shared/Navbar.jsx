
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo/logo.png';


const Navbar = () => {
  return (
    <div>
      {/* Navbar Section */}
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
          <i className="fas fa-bell text-blue-600"></i>
          <img
            src="https://placehold.co/40x40"
            alt="User profile picture"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex items-center space-x-8 p-4 bg-white">
        {['Home', 'My Courses', 'Workshop', 'Community', 'Setting'].map((page) => (
          <NavLink
            key={page}
            to={`/dashboard/${page.toLowerCase().replace(' ', '')}`} // URL dinamis
            className={({ isActive }) =>
              `cursor-pointer p-2 rounded ${
                isActive ? 'bg-blue-600 text-white' : 'text-gray-500'
              }`
            } // Gunakan isActive dari NavLink
          >
            {page}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
