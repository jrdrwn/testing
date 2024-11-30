import React from 'react';

const trendingCourses = [
  {
    image: "https://placehold.co/600x400",
    alt: "People working on laptops with code on screens",
    title: "Data Analysis with Python",
    description: "Get hands-on with Python to clean, analyze, and visualize data for real-world insights.",
    category: "IT & Software",
    university: "Telkom University",
    universityLogo: "https://placehold.co/24x24",
  },
  {
    image: "https://placehold.co/600x400",
    alt: "People discussing business strategy with documents and laptops",
    title: "Business Strategy for Startups",
    description: "Explore frameworks and models to create a sustainable business strategy for new ventures.",
    category: "Business",
    university: "Gadjah Mada University",
    universityLogo: "https://placehold.co/24x24",
  },
  {
    image: "https://placehold.co/600x400",
    alt: "Adobe Photoshop interface with editing tools",
    title: "Adobe Photoshop Essentials for Beginners",
    description: "Master the basics of Adobe Photoshop for photo editing and digital art creation.",
    category: "Design",
    university: "Bina Nusantara University",
    universityLogo: "https://placehold.co/24x24",
  },
];

const Trending = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Trending Now</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trendingCourses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={course.image}
              alt={course.alt}
              className="rounded-t-lg w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-blue-700">{course.title}</h2>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <p className="text-gray-500 mt-2">{course.category}</p>
              <div className="flex items-center mt-4">
                <img
                  src={course.universityLogo}
                  alt={`${course.university} logo`}
                  className="w-6 h-6 rounded-full"
                />
                <p className="text-gray-700 ml-2">{course.university}</p>
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
