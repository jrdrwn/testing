import React from 'react';

const FeaturedSection = () => {
  return (
    <div className="pb-10 mt-10">
      <h1 className="text-3xl font-semibold text-blue-700 mb-8 text-center">
        Designed for Your Success
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <div className="flex items-start">
            <i className="fas fa-video text-blue-700 text-3xl mr-4"></i>
            <div>
              <h2 className="text-lg font-semibold text-blue-700">Diverse Content Formats</h2>
              <p className="text-gray-600">
                Engage with videos learning, quizzes, and exam to deepen your learning.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <div className="flex items-start">
            <i className="fas fa-bell text-blue-700 text-3xl mr-4"></i>
            <div>
              <h2 className="text-lg font-semibold text-blue-700">Notifications & Reminders</h2>
              <p className="text-gray-600">
                Stay on track with reminders to complete modules and updates on courses you’re enrolled in.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <div className="flex items-start">
            <i className="fas fa-comments text-blue-700 text-3xl mr-4"></i>
            <div>
              <h2 className="text-lg font-semibold text-blue-700">Feedback Mechanism</h2>
              <p className="text-gray-600">
                Share your thoughts and suggestions to improve the platform and content quality.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <div className="flex items-start">
            <i className="fas fa-trophy text-blue-700 text-3xl mr-4"></i>
            <div>
              <h2 className="text-lg font-semibold text-blue-700">Gamification</h2>
              <p className="text-gray-600">
                Stay motivated with badges and point progress that keep you engaged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
