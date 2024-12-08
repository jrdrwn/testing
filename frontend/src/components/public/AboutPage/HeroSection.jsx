import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white pt-24 pb-10"> 
      <h1 className="text-4xl font-bold text-blue-800 text-center mt-10 px-4 sm:px-0">
        Empowering Students for Future-Ready Careers
      </h1>
      <p className="text-gray-600 text-center mt-4 px-4 sm:px-0">
        Overcoming literacy challenges, skill gaps, and curriculum misalignment with industry needs
        <br />
        —your journey to career success starts here with PINTURA.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
        Explore Courses <i className="fas fa-arrow-right ml-2"></i>
      </button>
      <div className="mt-10 px-4 sm:px-0">
        <img
          src="/homepage/heroabout.png"
          alt="Group of students working together with laptops in a classroom setting"
          className="rounded-lg shadow-lg max-w-full sm:max-w-none"
        />
      </div>
    </div>
  );
}

export default HeroSection;
