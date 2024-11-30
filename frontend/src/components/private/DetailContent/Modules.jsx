import React, { useState } from 'react';

const Modules = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const modules = [
    { title: 'Module 1: Introduction to Data Analysis', description: 'Learn the basics of data analysis.' },
    { title: 'Module 2: Data Collection and Cleaning', description: 'Understand methods of collecting and cleaning data.' },
    { title: 'Module 3: Data Manipulation with Excel & SQL', description: 'Master data manipulation techniques with Excel and SQL.' },
    { title: 'Module 4: Data Visualization with Power BI', description: 'Create compelling visualizations with Power BI.' },
    { title: 'Module 5: Basic Statistical Analysis', description: 'Learn statistical analysis for data insights.' },
    { title: 'Module 6: Real-world Case Studies and Applications', description: 'Apply your knowledge to real-world case studies.' },
  ];

  return (
    <div className="p-8 flex flex-col w-full lg:w-2/3">
      {/* Header */}
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Modules</h1>

      {/* Modules List */}
      <div className="space-y-4">
        {modules.map((module, index) => (
          <div key={index} className="border-b border-gray-300 pb-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <h2 className="text-lg text-blue-900">{module.title}</h2>
              <button className="text-blue-700 focus:outline-none">
                <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
              </button>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{module.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modules;
