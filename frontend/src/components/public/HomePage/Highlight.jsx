import React from 'react';
import img from '../../../assets/public/imghighlight.svg';

const Highlight = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-0">
      <h1 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-8 text-center">
        Highlight Events
      </h1>
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        {/* Left Section */}
        <div className="bg-white border border-blue-200 rounded-lg p-4 md:p-6 shadow-lg w-full md:w-96">
          <div className="mb-4">
            <span className="inline-block bg-blue-800 text-white text-xs font-semibold px-2 py-1 rounded">
              Webinar
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-4">
            Data Science Career Week 2024
          </h2>
          <div className="flex items-center">
            <img
              src="/avatar/xaviera.png"
              alt="Profile picture of the speaker"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 md:mr-3"
            />
            <div>
              <p className="text-gray-800 font-semibold text-sm md:text-base">
                Xaviera Putri Ardianingsih Listyo
              </p>
              <p className="text-gray-500 text-xs md:text-sm">Des 26, 2024</p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <img
          src={img}
          alt="Laptop displaying data charts"
          className="rounded-lg shadow-lg w-full md:w-auto"
        />
      </div>
    </div>
  );
};

export default Highlight;
