import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const InProgress = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('https://localhost:5000/api/auth/mycourses/3');
      if (response.ok) {
        const data = await response.json();
        console.log("Data from API:", data); // Debugging untuk melihat struktur data
        // Pastikan courses adalah array sebelum disimpan
        const courseArray = Array.isArray(data.courses) ? data.courses : [data.courses];
        setCourses(courseArray);
        setError(null);
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
        setCourses([]);
        setError(`HTTP error! Status: ${response.status}`);
      }
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        {/* Navigation buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">In Progress</button>
          <NavLink
            to="/dashboard/mycourses/completed"
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded"
          >
            Completed
          </NavLink>
        </div>

        {/* Courses List */}
        <div className="space-y-6">
          {courses.length > 0 ? (
            courses.map((course, index) => {
              console.log("Course Data:", course); // Debugging untuk memastikan data kursus
              return (
                <div key={index} className="bg-white shadow rounded-lg p-6 flex items-center">
                  {/* Gambar kursus */}
                  <img
                    src={course.image_url || "https://placehold.co/150x100"} // Fallback untuk gambar
                    alt={course.course_title || "Course"} // Fallback untuk title kosong
                    className="h-24 w-32 rounded-lg object-cover"
                  />

                  {/* Detail kursus */}
                  <div className="ml-6 flex-1">
                    <div className="text-gray-500 font-semibold">
                      {course.description || "No description available"}
                    </div>
                    <div className="text-xl font-semibold text-blue-600">
                      {course.course_title || "Untitled Course"}
                    </div>
                    <div className="mt-2 text-gray-500">Progress</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${course.progress || 0}%` }} // Fallback untuk progress
                      ></div>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">
                      Dive Back In
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No courses in progress.</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default InProgress;
