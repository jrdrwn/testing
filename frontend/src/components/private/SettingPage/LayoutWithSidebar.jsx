import React from "react";
import Sidebar from "./SideBar";

const LayoutWithSidebar = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg w-full max-w-6xl p-6 flex mt-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow pl-6">{children}</div>
      </div>
    </div>
  );
};

export default LayoutWithSidebar;
