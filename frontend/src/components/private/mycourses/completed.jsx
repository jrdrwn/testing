import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const CompletedCourses = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      image: "https://placehold.co/100x100",
      institution: "Bank Rakyat Indonesia Academy",
      title: "Excel Essentials for Business Analysis",
      date: "October 12, 2024",
    },
    {
      id: 2,
      image: "https://placehold.co/100x100",
      institution: "Jakarta State University",
      title: "Introduction to Python Programming",
      date: "June 18, 2024",
    },
    {
      id: 3,
      image: "https://placehold.co/100x100",
      institution: "Padjadjaran University",
      title: "Data Analytics Basics with Excel",
      date: "April 15, 2024",
    },
    {
      id: 4,
      image: "https://placehold.co/100x100",
      institution: "Microsoft Indonesia",
      title: "HTML & CSS for Beginners",
      date: "February 29, 2024",
    },
    {
      id: 5,
      image: "https://placehold.co/100x100",
      institution: "Shopee Indonesia",
      title: "SQL for Data Exploration",
      date: "January 23, 2024",
    },
  ];

  const handleViewCertificate = (course) => {
    setSelectedCourse(course);
    navigate('/dashboard/mycourses/certificate');
  };

  const CourseCard = ({ course }) => {
    return (
      <div className="flex items-center space-x-4 p-4 border-b">
        <img src={course.image} alt={course.title} className="w-24 h-24 rounded" />
        <div className="flex-1">
          <h3 className="text-gray-600">{course.institution}</h3>
          <h2 className="text-xl font-bold text-blue-600">{course.title}</h2>
          <p className="text-gray-500">Completion Date: {course.date}</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded">View Details</button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => handleViewCertificate(course)}
          >
            View Certificate
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex space-x-4 mb-4">
        <NavLink
          to="/dashboard/mycourses"
          className="px-4 py-2 bg-gray-200 rounded"
        >
          In Progress
        </NavLink>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Completed
        </button>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </div>
  );
};

export default CompletedCourses;
