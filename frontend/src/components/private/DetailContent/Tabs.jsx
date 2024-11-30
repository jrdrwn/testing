import React from 'react';

const Tabs = () => {
  return (
    <div className="bg-gray-100 border-t border-b border-gray-300">
      <nav className="flex justify-center space-x-4 p-2">
        <a href="#" className="text-white bg-blue-700 px-4 py-2 rounded">Overview</a>
        <a href="#" className="text-gray-500 px-4 py-2">Modules</a>
        <a href="#" className="text-gray-500 px-4 py-2">Instructor</a>
        <a href="#" className="text-gray-500 px-4 py-2">Details</a>
        <a href="#" className="text-gray-500 px-4 py-2">Skills</a>
        <a href="#" className="text-gray-500 px-4 py-2">Reviews</a>
        <a href="#" className="text-gray-500 px-4 py-2">Similar Courses</a>
        <a href="#" className="text-gray-500 px-4 py-2">FAQs</a>
      </nav>
    </div>
  );
};

export default Tabs;
