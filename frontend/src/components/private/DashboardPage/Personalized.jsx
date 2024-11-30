import React from 'react';

const courses = [
  {
    image: "https://placehold.co/600x400",
    title: "SQL for Data Science",
    description: "Learn SQL fundamentals to query, analyze, and process data efficiently.",
    category: "IT & Software",
    university: "Bina Sarana Informatika University",
    universityLogo: "https://placehold.co/20x20",
  },
  {
    image: "https://placehold.co/600x400",
    title: "Branding Essentials for Modern Business",
    description: "Discover essential branding techniques to elevate your business’s identity.",
    category: "Marketing",
    university: "Shopee Indonesia",
    universityLogo: "https://placehold.co/20x20",
  },
  {
    image: "https://placehold.co/600x400",
    title: "Basic Photography Skills",
    description: "Understand core photography concepts to capture stunning visuals with any camera.",
    category: "Photography",
    university: "Padjadjaran University",
    universityLogo: "https://placehold.co/20x20",
  },
];

const Personalized = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Personalized Courses for You</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={course.image} alt={`Course ${index + 1}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold text-blue-900">{course.title}</h2>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <p className="text-sm text-gray-500 mt-2">{course.category}</p>
              <div className="flex items-center mt-4">
                <img src={course.universityLogo} alt="University Logo" className="w-5 h-5 mr-2" />
                <p className="text-sm text-gray-700">{course.university}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
      <button className="mt-6 bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center">
        View 3 More <i className="fas fa-chevron-down ml-2"></i>
      </button>
      </div>
    </div>
  );
};

export default Personalized;
