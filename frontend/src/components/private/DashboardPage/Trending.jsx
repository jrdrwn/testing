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
        src={course.image_url || "https://placehold.co/400x200?text=No+Image"}
        alt={course.title || "No Title"}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-blue-700">
          {course.title || "No Title Available"}
        </h2>
        <p className="text-gray-600 mt-2">
          {course.description || "No Description Available"}
        </p>
        <div className="flex items-center mt-4">
          <span className="text-sm text-gray-500">
            {course.price !== null ? `$ ${course.price}` : "Free"}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <img
            src={course.institutionLogo || "https://placehold.co/20x20?text=Logo"}
            alt={course.institution || "Institution"}
            className="w-5 h-5 mr-2"
          />
          <span className="text-sm text-gray-700">
            {course.institution || "Unknown Institution"}
          </span>
        </div>
      </div>
    </div>
  );
};

const Trending = () => {
  const [courses, setCourses] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState(3); // Mulai dengan 3 courses yang terlihat

  useEffect(() => {
    fetch("https://localhost:5000/api/auth/courses/trend")
      .then((response) => response.json())
      .then((data) => {
        const firstThreeCourses = data.courses ? data.courses : [];
        setCourses(firstThreeCourses);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleViewMore = () => {
    setVisibleCourses((prevVisibleCourses) => prevVisibleCourses + 3); // Menambah 3 courses yang ditampilkan
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Trending Now</h1>
      <div className="grid grid-cols-3 gap-6">
        {courses.slice(0, visibleCourses).map((course) => (
          <CourseCard key={course.course_id} course={course} />
        ))}
      </div>
      {/* Tombol untuk menambah 3 courses lagi */}
      {visibleCourses < courses.length && (
        <button 
          onClick={handleViewMore}
          className="mt-6 bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center"
        >
          View 3 More <i className="fas fa-chevron-down ml-2"></i>
        </button>
      )}
    </div>
  );
};

export default Trending;
