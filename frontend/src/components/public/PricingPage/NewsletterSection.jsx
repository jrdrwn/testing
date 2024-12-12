import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="bg-blue-700 text-white py-6 px-4 flex flex-wrap gap-4 justify-between items-center">
      <div className="flex flex-1 items-center space-x-4 min-w-[300px]">
        <i className="fas fa-pencil-alt text-2xl"></i>
        <p className="text-lg font-medium">
          Stay Updated with PINTURA! Subscribe to receive exclusive tips, career insights, and the latest updates straight to your inbox.
        </p>
      </div>
      <div className="flex flex-1 items-center space-x-2 min-w-[300px]">
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className="py-2 px-4 rounded-l-md border-none focus:outline-none text-gray-700 w-full sm:w-auto"
        />
        <button className="bg-white text-blue-700 py-2 px-4 rounded-r-md font-medium">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterSection;
