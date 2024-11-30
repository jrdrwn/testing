import React from 'react';

const Overview = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-2">Overview</h1>
      <p className="text-lg text-gray-600 mb-8">
        This section provides an overview of the course, highlighting key aspects and learning objectives.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center">
          <i className="fas fa-heart text-4xl text-blue-700 mr-4"></i>
          <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex items-center">
          <i className="fas fa-database text-4xl text-blue-700 mr-4"></i>
          <p className="text-xl">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="flex items-center">
          <i className="fas fa-calendar-alt text-4xl text-blue-700 mr-4"></i>
          <p className="text-xl">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>
        <div className="flex items-center">
          <i className="fas fa-file-alt text-4xl text-blue-700 mr-4"></i>
          <p className="text-xl">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
