import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk menentukan apakah menu aktif
  const isActive = (path) => location.pathname === path;

  // Fungsi untuk menutup menu
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative md:w-1/4 flex-shrink-0 border-r md:pr-4">
      {/* Tombol toggle untuk sidebar pada perangkat kecil */}
      <button
        className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Sidebar menu */}
      <div
        className={`absolute md:static top-0 left-0 bg-white w-64 md:w-auto p-4 z-10 transition-transform transform h-full md:h-auto overflow-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Tombol Close Menu */}
        <button
          className="md:hidden bg-red-600 text-white px-4 py-2 rounded-lg mb-4"
          onClick={handleCloseMenu}
        >
          Close Menu
        </button>

        <h2 className="text-blue-600 text-xl font-semibold mb-6">Settings</h2>
        <ul>
          <li className="mb-4">
            <Link
              to="/dashboard/setting"
              onClick={handleCloseMenu}
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
              onClick={handleCloseMenu}
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
              onClick={handleCloseMenu}
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
              onClick={handleCloseMenu}
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
    </div>
  );
};

export default Sidebar;
