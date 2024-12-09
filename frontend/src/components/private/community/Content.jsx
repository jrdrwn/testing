import React from 'react';

const Content = () => {
  return (
    <main className="flex-1 p-4">
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <div className="flex items-center space-x-2 mb-4">
          <img src="https://placehold.co/40x40" alt="User avatar" className="rounded-full w-10 h-10" />
          <input
            type="text"
            placeholder="What's on your mind? Share your thoughts, tips, or questions with the community!"
            className="flex-1 border border-gray-300 rounded-full px-4 py-2"
          />
          <button className="text-blue-500 font-semibold">Post</button>
        </div>
      </div>
      {/* Replace these posts with reusable post components in future */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        {/* Post Content */}
        <div className="flex items-center space-x-2 mb-4">
          <img src="https://placehold.co/40x40" alt="User avatar" className="rounded-full w-10 h-10" />
          <div>
            <span className="font-semibold">Isabella</span>
            <span className="bg-blue-100 text-blue-500 text-xs font-semibold ml-2 px-2 py-1 rounded">Curious Learner</span>
            <span className="text-gray-500 text-sm ml-2">2h</span>
          </div>
          <i className="fas fa-ellipsis-h ml-auto text-gray-500"></i>
        </div>
        <p className="mb-4">
          Finally completed the 'Excel Essentials for Business Analysis' course! 🎉 Huge thanks to Bank Rakyat Indonesia
          Academy for such an engaging module. Highly recommend this to anyone diving into data! #DataAnalysis
          #LearningJourney
        </p>
        <img src="https://placehold.co/600x200" alt="Certificate of Completion" className="w-full rounded-lg mb-4" />
        <div className="flex items-center space-x-4 text-gray-500">
          <div className="flex items-center space-x-1">
            <i className="fas fa-heart"></i>
            <span>210</span>
          </div>
          <div className="flex items-center space-x-1">
            <i className="fas fa-comment"></i>
            <span>45</span>
          </div>
          <div className="flex items-center space-x-1">
            <i className="fas fa-share"></i>
            <span>18</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
