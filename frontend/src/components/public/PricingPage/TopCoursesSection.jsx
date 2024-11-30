import React from 'react';

const courses = [
  {
    id: 1,
    category: 'DIGITAL MARKETING',
    title: 'Digital Marketing Essentials',
    description: 'Master the basics of digital marketing, including SEO, social media strategies, and content marketing.',
  },
  {
    id: 2,
    category: 'DATA SCIENCE',
    title: 'Data Science Fundamentals',
    description: 'Dive into data science with courses covering Python, data analysis, and machine learning concepts.',
  },
  {
    id: 3,
    category: 'UI/UX DESIGN',
    title: 'UI/UX Design Mastery',
    description: 'Learn the principles of user experience and user interface design, from wireframing to prototyping.',
  },
  {
    id: 4,
    category: 'PROJECT MANAGEMENT',
    title: 'Project Management Professional',
    description: 'Develop project management skills and get prepared for the PMP certification with real-world case studies.',
  },
];

const TopCoursesSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-4">
        Top Courses to Elevate Your Expertise
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Discover targeted resources to help you achieve your goals in various areas:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-sm font-bold text-blue-600 mb-2">{course.category}</h2>
            <h3 className="text-xl font-bold text-blue-800 mb-4">{course.title}</h3>
            <p className="text-gray-600 mb-6">{course.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-400">
                {course.id < 10 ? `0${course.id}` : course.id}
              </span>
              <button className="bg-blue-600 text-white rounded-full p-2">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCoursesSection;
