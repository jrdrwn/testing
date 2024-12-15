import React from 'react';
import img from '../../../assets/public/imghighlight.svg';

const Highlight = () => {
  return (
    <section className="bg-white py-16 mt-8 font-poppins">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-12">
          Highlight Events
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Section */}
          <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-lg w-full md:w-1/2">
            <div className="mb-4">
              <span className="inline-block bg-blue-800 text-white text-xs font-semibold px-2 py-1 rounded">
                Webinar
              </span>
            </div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Data Science Career Week 2024
            </h2>
            <div className="flex items-center">
              <img
                src="/avatar/xaviera.png"
                alt="Profile picture of the speaker"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="text-gray-800 font-semibold text-base">
                  Xaviera Putri Ardianingsih Listyo
                </p>
                <p className="text-gray-500 text-sm">Dec 26, 2024</p>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img
              src={img}
              alt="Laptop displaying data charts"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
