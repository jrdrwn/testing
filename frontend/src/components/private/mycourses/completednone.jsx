import React from 'react';
import { NavLink } from 'react-router-dom';

const CompletedCoursesNone = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div>
      <div className="flex space-x-4 mb-4">
        <NavLink
          to="/dashboard/mycourses/Inprogressnone"
          className="px-4 py-2 bg-gray-200 rounded"
        >
          In Progress
        </NavLink>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Completed
        </button>
      </div>
        <div className="bg-white border rounded-lg p-8 text-center">
          <img
            src="https://img.freepik.com/free-vector/virtual-gym-concept-illustrated_23-2148534100.jpg"
            alt="Illustration of a person using a laptop"
            className="mx-auto mb-4"
          />
          <p className="text-gray-600">You haven't started any courses yet. Explore our catalog to begin learning!</p>
        </div>
      </div>
    </main>
  );
};

export default CompletedCoursesNone;
