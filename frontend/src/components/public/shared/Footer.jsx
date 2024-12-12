import React from 'react';
import Logo from '/logo/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8 font-poppins">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 w-full md:w-1/4 mr-16">
            <div className="flex items-center justify-center md:justify-start">
              <img src={Logo} alt="Logo" className="h-10 mr-2" />
            </div>
            <p className="text-gray-600 mt-4 text-center md:text-left">
              Empowering your practical skills and career guidance with community!
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap w-full md:w-3/4 justify-center md:justify-between">
            <div className="w-full sm:w-1/2 md:w-1/4 text-center md:text-left mb-6 md:mb-0">
              <h2 className="font-bold text-blue-700 mb-3">Pintura</h2>
              <ul className="text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-blue-600">About</a></li>
                <li><a href="#" className="hover:text-blue-600">Subscribe</a></li>
                <li><a href="#" className="hover:text-blue-600">Testimonials</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 text-center md:text-left mb-6 md:mb-0">
              <h2 className="font-bold text-blue-700 mb-3">Service</h2>
              <ul className="text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-blue-600">Courses</a></li>
                <li><a href="#" className="hover:text-blue-600">Workshop</a></li>
                <li><a href="#" className="hover:text-blue-600">Community</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 text-center md:text-left mb-6 md:mb-0">
              <h2 className="font-bold text-blue-700 mb-3">More</h2>
              <ul className="text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-600">Help center</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p className="text-gray-500 text-sm md:text-base">
            Copyright © 2025 Pintura | All Rights Reserved | 
            <a href="#" className="hover:text-blue-600"> Terms and Conditions</a> | 
            <a href="#" className="hover:text-blue-600"> Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
