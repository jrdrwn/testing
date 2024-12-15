import React from "react";
import { Link } from "react-router-dom"; 
import Img from '../../../assets/public/imgHeroV1.svg';

const HeroV1 = () => {
  return (
    <section className="bg-white py-16 mt-8 font-poppins">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">
        {/* Teks Hero */}
        <div className="text-center lg:text-left max-w-lg mb-8 lg:mb-0">
          <h1 className="text-[48px] font-bold text-blue-800 mb-4">
            Enhance Your Skills, Build Your Dream Career
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            An interactive learning program platform connecting students with industry skills, mentorship, and career opportunities
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link to="/login"> 
              <button className="px-6 py-3 bg-blue-800 text-white rounded-lg shadow hover:bg-blue-900">
                Get Started
              </button>
            </Link>
            <Link to="/about"> 
              <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Gambar Hero */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={Img} alt="Pintura" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroV1;
