import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  // Fungsi untuk menentukan apakah menu aktif
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex-shrink-0 w-1/4 border-r pr-4">
      <h2 className="text-blue-600 text-xl font-semibold mb-6">Settings</h2>
      <ul>
        <li className="mb-4">
          <Link
            to="/dashboard/setting"
            className={`flex items-center ${
              isActive("/dashboard/setting") ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <i
              className={`fas fa-user mr-2 ${
                isActive("/dashboard/setting") ? "text-blue-600" : "text-gray-600"
              }`}
            ></i>
            Profile
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/dashboard/setting/notifications"
            className={`flex items-center ${
              isActive("/dashboard/setting/notifications")
                ? "text-blue-600"
                : "text-gray-600"
            }`}
          >
            <i
              className={`fas fa-bell mr-2 ${
                isActive("/dashboard/setting/notifications")
                  ? "text-blue-600"
                  : "text-gray-600"
              }`}
            ></i>
            Notifications
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/dashboard/setting/sociallinks"
            className={`flex items-center ${
              isActive("/dashboard/setting/sociallinks")
                ? "text-blue-600"
                : "text-gray-600"
            }`}
          >
            <i
              className={`fas fa-link mr-2 ${
                isActive("/dashboard/setting/sociallinks")
                  ? "text-blue-600"
                  : "text-gray-600"
              }`}
            ></i>
            Social Links
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/setting/subscriptions"
            className={`flex items-center ${
              isActive("/dashboard/setting/subscriptions")
                ? "text-blue-600"
                : "text-gray-600"
            }`}
          >
            <i
              className={`fas fa-credit-card mr-2 ${
                isActive("/dashboard/setting/subscriptions")
                  ? "text-blue-600"
                  : "text-gray-600"
              }`}
            ></i>
            Subscriptions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
