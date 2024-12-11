import React from 'react';
import Img from '../../../assets/public/imgcalltoaction.svg';

const CallToAction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4">
      <img
        src={Img}
        alt="Three people sitting at a table with laptops, smiling and talking"
        className="w-full md:w-1/2 max-w-md md:max-w-lg mb-6 md:mb-0"
      />
      <div className="text-center md:text-left p-4 md:p-8">
        <h1 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">
          Ready to Start Your Learning Journey?
        </h1>sa
        <p className="text-gray-600 mb-4 text-sm md:text-base">
          Join thousands of students who have already built their future with PINTURA.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300">
          Get Started Now <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
