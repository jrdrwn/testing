import React from "react";
import LayoutWithSidebar from "./LayoutWithSidebar";

const Notifications = () => {
  const renderSection = (title, itemCount) => (
    <div>
      <h2 className="text-lg font-bold text-blue-600 mb-2">{title}</h2>
      <div className="space-y-4">
        {Array.from({ length: itemCount }).map((_, index) => (
          <div key={index} className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-semibold">Accept terms and conditions</p>
              <p className="text-gray-600">
                You agree to our{' '}
                <a href="#" className="text-blue-600">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600">
                  Privacy Policy
                </a>.
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="text-red-600">
                <i className="fas fa-times"></i>
              </button>
              <button className="text-blue-600">
                <i className="fas fa-check"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <LayoutWithSidebar>
      <h1 className="text-2xl font-bold text-blue-600 mb-2 flex items-center">
        <i className="fas fa-bell mr-2"></i> Notifications
      </h1>
      <p className="text-gray-600 mb-4">
        Customize your notification preferences here. Click save when you're done.
      </p>
      <div className="space-y-6">
        {renderSection("General", 3)}
        {renderSection("Assignment & Activity", 3)}
        {renderSection("Community", 2)}
        {renderSection("Channel & Promotion Updates", 5)}
      </div>
    </LayoutWithSidebar>
  );
};

export default Notifications;
