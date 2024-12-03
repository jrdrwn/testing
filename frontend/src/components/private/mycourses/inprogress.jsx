import React from 'react';
import { NavLink } from 'react-router-dom';

const InProgress = () => {
  const courses = [
    {
      imgSrc: "https://placehold.co/150x100",
      university: "University of Indonesia",
      title: "Data Analysis Fundamentals",
      progress: "0%",
    },
    {
      imgSrc: "https://placehold.co/150x100",
      university: "Bina Sarana Informatika University",
      title: "SQL for Data Science",
      progress: "40%",
    },
    {
      imgSrc: "https://placehold.co/150x100",
      university: "Bandung Institute of Technology",
      title: "Introduction to Statistics",
      progress: "90%",
    },
  ];

  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <div className="flex space-x-4 mb-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">In Progress</button>
          <NavLink
            to="/dashboard/mycourses/completed"
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded"
          >
            Completed
          </NavLink>
        </div>
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6 flex items-center">
              <img
                src={course.imgSrc}
                alt={course.title}
                className="h-24 w-32 rounded-lg object-cover"
              />
              <div className="ml-6 flex-1">
                <div className="text-gray-500 font-semibold">{course.university}</div>
                <div className="text-xl font-semibold text-blue-600">{course.title}</div>
                <div className="mt-2 text-gray-500">Progress</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: course.progress }}
                  ></div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Dive Back In
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default InProgress;
