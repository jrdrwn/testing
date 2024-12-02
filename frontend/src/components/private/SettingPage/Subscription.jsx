import React from 'react'
import LayoutWithSidebar from "./LayoutWithSidebar";

const Subscription = () => {
  return (
    <LayoutWithSidebar>
    <div>
      <div className="flex justify-center min-h-screen">
                    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
                        <div className="flex items-center">
                            <i className="fas fa-cog text-blue-600 text-2xl mr-2"></i>
                            <h1 className="text-blue-600 text-2xl font-bold">Subscriptions</h1>
                        </div>
                        <p className="text-gray-500 mt-2">Manage your subscriptions preferences here and stay updated with the new features.</p>
                    </div>
                </div>
    </div>
    </LayoutWithSidebar>
  )
}

export default Subscription
