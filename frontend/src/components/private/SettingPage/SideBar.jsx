import React from "react";

const Sidebar = () => {
  return (
    <div className="flex-shrink-0 w-1/4 border-r pr-4">
      <h2 className="text-blue-600 text-xl font-semibold mb-6">Settings</h2>
      <ul>
        <li className="mb-4">
          <a href="#" className="text-blue-600 flex items-center">
            <i className="fas fa-user mr-2"></i> Profile
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-gray-600 flex items-center">
            <i className="fas fa-bell mr-2"></i> Notifications
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-gray-600 flex items-center">
            <i className="fas fa-link mr-2"></i> Social Links
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-600 flex items-center">
            <i className="fas fa-credit-card mr-2"></i> Subscriptions
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
