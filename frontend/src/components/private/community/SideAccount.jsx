import React from 'react';

const SideAccount = () => {
  return (
    <aside className="w-full md:w-1/4 bg-white p-4">
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <div className="flex items-center space-x-2 mb-4">
          <img src="https://placehold.co/40x40" alt="User avatar" className="rounded-full w-10 h-10" />
          <div>
            <span className="font-semibold">Deca Devin</span>
            <span className="bg-blue-100 text-blue-500 text-xs font-semibold ml-2 px-2 py-1 rounded">Newbie Explorer</span>
          </div>
        </div>
        <div className="text-gray-500">
          <span>54 followers</span>
          <span className="ml-2">172 following</span>
        </div>
      </div>
    </aside>
  );
};

export default SideAccount;
