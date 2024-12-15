import React from 'react';
import { Link } from "react-router-dom"; 
import Img from '../../../assets/public/imgsectionv3.svg';

const SectionV3 = () => {
  return (
    <section className="bg-white py-16 mt-8 font-poppins">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 lg:px-16">
        {/* Gambar di sisi kiri */}
        <div className="w-full md:w-1/2">
          <img
            src={Img}
            alt="Illustration of a person with headphones using a laptop"
            className="w-full h-auto"
          />
        </div>
        
        {/* Konten teks di sisi kanan */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-6">
          <h2 className="text-3xl font-bold text-blue-800">
            Why PINTURA?
          </h2>
          <p className="mt-4 text-gray-600">
            Transform your learning journey with our comprehensive platform designed specifically for Indonesian students in the digital age.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <i className="fas fa-check-circle text-blue-800 mr-2"></i>
              <span className="font-semibold">Industry-Relevant Skills</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-blue-800 mr-2"></i>
              <span className="font-semibold">Professional Mentorship</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-blue-800 mr-2"></i>
              <span className="font-semibold">Comprehensive Career Support</span>
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <Link to="/login">
              <button className="bg-blue-800 text-white px-6 py-3 rounded-md shadow hover:bg-blue-900 flex items-center">
                Get started
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </Link>
            <Link to="/about">
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:border-gray-400">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionV3;
