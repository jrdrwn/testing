import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-full md:w-1/4 bg-white p-4">
      <div className="flex items-center space-x-2 mb-4">
        <i className="fas fa-home text-blue-500 text-xl"></i>
        <a 
          href="#for-you" 
          className="font-semibold text-blue-500 hover:underline"
        >
          For You
        </a>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <i className="fas fa-compass text-blue-500 text-xl"></i>
        <a 
          href="#explore" 
          className="font-semibold text-blue-500 hover:underline"
        >
          Explore
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <i className="fas fa-bell text-blue-500 text-xl"></i>
        <a 
          href="#notifications" 
          className="font-semibold text-blue-500 hover:underline"
        >
          Notifications
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
