import React from 'react';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    title: "Data Analysis Fundamentals",
    description: "Master the basics of data analysis with practical industry application",
    category: "Data & Analytics",
    university: "University of Indonesia",
    imageUrl: "https://placehold.co/600x400?text=Data+Analysis+Fundamentals",
    universityLogo: "https://placehold.co/50x50?text=UI",
  },
  {
    title: "Advance React Development",
    description: "The React Framework – created and maintained",
    category: "Web Development",
    university: "Telkom Indonesia",
    imageUrl: "https://placehold.co/600x400?text=Advance+React+Development",
    universityLogo: "https://placehold.co/50x50?text=Telkom",
  },
];

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard/detailcontent', { state: { course } });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md overflow-hidden flex w-full md:w-1/2 mb-4 md:mb-0 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <img className="w-1/3 object-cover" src={course.imageUrl} alt={course.title} />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-blue-700">{course.title}</h2>
          <p className="text-gray-600">{course.description}</p>
          <p className="text-sm text-blue-500 mt-2">{course.category}</p>
        </div>
        <div className="flex items-center mt-4">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={course.universityLogo}
            alt={course.university}
          />
          <p className="text-gray-700">{course.university}</p>
        </div>
      </div>
    </div>
  );
};

const Recently = () => {
  return (
    <div className='p-8'>
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Recently Viewed Courses</h1>
      <div className="flex flex-col md:flex-row md:space-x-4">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Recently;
