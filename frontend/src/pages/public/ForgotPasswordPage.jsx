import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../../assets/public/imgForgotformPage.svg';

const ForgotPasswordPage = () => {
  return (
    <body className="bg-white flex items-center justify-center min-h-screen font-poppins">
      <div className="flex w-full max-w-4xl">
        <div className="w-1/2 flex items-center justify-center">
          <img
            alt="A confused woman looking at a laptop with question marks above her head"
            className="w-3/4"
            height="400"
            src={Img}
            width="400"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center p-8">
          <Link to="/"
            className="flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] w-20 mb-6">
            <i className="fas fa-arrow-left mr-2"></i>
            Back
          </Link>
          <h1 className="text-4xl font-bold text-blue-700 mb-2">Forgot Password</h1>
          <p className="text-gray-600 mb-6">
            Enter your email below to receive the OTP code.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-gray-400"></i>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
            </div>
            <div>
              <button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default ForgotPasswordPage;
