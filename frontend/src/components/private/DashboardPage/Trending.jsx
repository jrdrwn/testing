import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// Komponen untuk setiap Course Card
const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard/detailcontent", { state: { course } });
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
            src={
              course.institutionLogo || "https://placehold.co/20x20?text=Logo"
            }
            alt={course.institution}
            className="w-5 h-5 mr-2"
          />
          <span className="text-sm text-gray-700">{course.institution}</span>
        </div>
      </div>
    </div>
  );
};

const Trending = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5000/api/auth/courses/trend")
      .then((response) => response.json())
      .then((data) => setCourses(data.courses || []))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Trending Now</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={course.image_url}
              alt={course.title}
              className="rounded-t-lg w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-blue-700">
                {course.title}
              </h2>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <p className="text-gray-500 mt-2">{course.category}</p>
              <div className="flex items-center mt-4">
                <img
                  src={course.company}
                  alt={`company ${course.course_id} logo`}
                  className="w-6 h-6 rounded-full"
                />
                <p className="text-gray-700 ml-2">company {course.course_id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center">
        View 3 More <i className="fas fa-chevron-down ml-2"></i>
      </button>
    </div>
  );
};

export default Trending;
