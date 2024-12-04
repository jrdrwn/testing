import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Komponen untuk setiap Course Card
const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard/detailcontent', { state: { course } });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
    >
      <img
        src={course.image_url}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-blue-700">{course.title}</h2>
        <p className="text-gray-600 mt-2">{course.description}</p>
        <div className="flex items-center mt-4">
          <span className="text-sm text-gray-500">{"$ " + course.price}</span>
        </div>
        <div className="flex items-center mt-2">
          <img
            src={course.institutionLogo || "https://placehold.co/20x20?text=Logo"}
            alt={course.institution}
            className="w-5 h-5 mr-2"
          />
          <span className="text-sm text-gray-700">{course.institution}</span>
        </div>
      </div>
    </div>
  );
};

// Komponen utama Courses
const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://localhost:5000/api/auth/courses') // Sesuaikan URL backend Anda
      .then((response) => response.json())
      .then((data) => setCourses(data.courses || [])) // Pastikan `data.courses` sesuai struktur API
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-8 min-h-screen mb-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">All</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">Development</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">Business</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">Finance</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">IT & Software</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">Office Productivity</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <button className="px-4 py-2 bg-white text-gray-700 rounded">Previous</button>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">1</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">2</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">3</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">4</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">5</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">6</button>
        </div>
        <button className="px-4 py-2 bg-white text-gray-700 rounded">Next</button>
      </div>
    </div>
  );
};

export default Courses;
