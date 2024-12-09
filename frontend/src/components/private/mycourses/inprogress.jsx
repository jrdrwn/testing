import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const InProgress = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Ambil userId dari localStorage
        if (!userId) {
          throw new Error('User not logged in');
        }

        const response = await fetch(`https://localhost:5000/api/auth/mycourses/${userId}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Data from API:', data);
          const courseArray = Array.isArray(data.courses) ? data.courses : [data.courses];
          setCourses(courseArray);
          setError(null);
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (err) {
        console.error('Error fetching courses:', err.message);
        setCourses([]);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

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
            courses.map((course, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6 flex items-center">
                {/* Gambar kursus */}
                <img
                  src={course.image_url || 'https://placehold.co/150x100'}
                  alt={course.course_title || 'Course'}
                  className="h-24 w-32 rounded-lg object-cover"
                />

                {/* Detail kursus */}
                <div className="ml-6 flex-1">
                  <div className="text-gray-500 font-semibold">
                    {course.description || 'No description available'}
                  </div>
                  <div className="text-xl font-semibold text-blue-600">
                    {course.course_title || 'Untitled Course'}
                  </div>
                  <div className="mt-2 text-gray-500">Progress</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${course.progress || 0}%` }}
                    ></div>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    Dive Back In
                  </button>
                </div>
              </div>
            ))
          ) : (
            // Pesan jika tidak ada kursus
            <div className="text-gray-500">No courses found for this user.</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default InProgress;
