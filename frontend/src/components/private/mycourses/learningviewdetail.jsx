import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Impor useNavigate
import Logo from '../../../assets/logo/logo.png';

const Learningdetailquiz = () => {
  const [isModuleOpen, setIsModuleOpen] = useState(Array(6).fill(false)); // Array untuk menyimpan status terbuka/tutup untuk setiap modul
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi
  const [selectedModule, setSelectedModule] = useState(null);


  const toggleModule = (index) => {
    const updatedModuleStatus = [...isModuleOpen];
    updatedModuleStatus[index] = !updatedModuleStatus[index];
    setIsModuleOpen(updatedModuleStatus);

    // Memastikan modul yang sama bisa dibuka dan ditutup
    if (selectedModule === index) {
      setSelectedModule(null);
    } else {
      setSelectedModule(index);
    }
  };

  const handleStartClick = () => {
    // Arahkan pengguna ke halaman yang diinginkan setelah klik start
    navigate('/dashboard/workshop/learningquiz');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow p-4 flex flex-col items-center">
        <div className="flex justify-center w-full mb-4">
          <img src={Logo} alt="PINTUR Logo" className="h-16 w-16 object-contain" />
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="text-sm text-gray-500">
            Home &gt; My Courses &gt; Data Analysis Fundamentals &gt; Module 1 &gt; Quiz
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">Previous</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Next</a>
          </nav>
        </div>
      </header>
      <main className="flex flex-1">
        <aside className="w-1/4 bg-white p-4 shadow">
          <div className="max-w-md mx-auto">
            <div className="bg-blue-600 p-4 rounded-t-lg">
              <h2 className="text-lg font-semibold text-white">Introduction</h2>
            </div>

            {/* Repeat for other modules */}
            {["Module 1", "Module 2", "Module 3", "Module 4", "Module 5", "Module 6"].map((module, index) => (
              <div key={index}>
                <div
                  className={`p-4 border-b border-gray-300 mb-2 shadow cursor-pointer ${selectedModule === index ? 'bg-blue-100' : 'bg-white'}`}
                  onClick={() => toggleModule(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-black">{module}</h3>
                    <button onClick={() => toggleModule(index)} className="text-black">
                      {isModuleOpen[index] ? (
                        <i className="fas fa-chevron-down"></i>
                      ) : (
                        <i className="fas fa-chevron-right"></i>
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-black">
                    {module === "Module 1" ? "Introduction to Data Analysis" : 
                    module === "Module 2" ? "Data Collection and Cleaning" : 
                    module === "Module 3" ? "Data Manipulation with Excel & SQL" : 
                    module === "Module 4" ? "Data Visualization with Power BI" : 
                    module === "Module 5" ? "Basic Statistical Analysis" : 
                    "Real-world Case Studies and Applications"}
                  </p>
                </div>
                {isModuleOpen[index] && (
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center text-black border-b border-gray-300 py-2">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span>Lesson {index + 1}.1: {module === "Module 1" ? "What is Data Analysis?" : 
                      module === "Module 2" ? "Data Collection Methods" : 
                      module === "Module 3" ? "Excel Basics" : 
                      module === "Module 4" ? "Creating Charts" : 
                      module === "Module 5" ? "Introduction to Statistics" : 
                      "Case Study 1"}</span>
                      <i className="fas fa-chevron-right ml-auto"></i>
                    </li>
                    <li className="flex items-center text-black border-b border-gray-300 py-2">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span>Lesson {index + 1}.2: {module === "Module 1" ? "Types of Data" : 
                      module === "Module 2" ? "Data Cleaning Techniques" : 
                      module === "Module 3" ? "SQL Basics" : 
                      module === "Module 4" ? "Advanced Charts" : 
                      module === "Module 5" ? "Probability" : 
                      "Case Study 2"}</span>
                      <i className="fas fa-chevron-right ml-auto"></i>
                    </li>
                    {module === "Module 1" && (
                      <li className="flex items-center text-black border-b border-gray-300 py-2">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        <span>Lesson 1.3: Tools and Technologies</span>
                        <i className="fas fa-chevron-right ml-auto"></i>
                      </li>
                    )}
                    <li className="flex items-center text-black border-b border-gray-300 py-2">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span>Quiz</span>
                    </li>
                  </ul>
                )}
              </div>
            ))}

            <div className="bg-white p-4 border-t border-gray-300 shadow">
              <h3 className="text-lg font-semibold text-black">Final Exam</h3>
            </div>
          </div>
        </aside>

        {/* Start Quiz Result Section */}
        <div className="flex-1 bg-gray-50 p-6">
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h1 className="text-2xl font-semibold text-blue-700">Quiz Result</h1>
            <p className="text-gray-600 mt-2">Quiz Date: November 21, 2024, at 15:45:45</p>
            <div className="flex justify-between items-center mt-6">
              <div className="text-center">
                <p className="text-gray-500">Total questions</p>
                <p className="text-4xl font-bold">5</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Score</p>
                <p className="text-4xl font-bold text-blue-700">80</p>
              </div>
            </div>
            <div className="mt-8">
              <Question 
                  question="What is the primary role of a data analyst?" 
                  options={[
                      "Developing software applications for businesses.",
                      "Collecting, processing, and interpreting data to solve problems.",
                      "Designing the user interface for websites.",
                      "Writing reports on financial budgets."
                  ]}
                  correctIndex={1}
                  selectedIndex={1}
              />
              <Question 
                  question="What is the first step in a typical data analysis process?" 
                  options={[
                      "Visualizing data using graphs and charts.",
                      "Collecting data relevant to the analysis.",
                      "Running machine learning models.",
                      "Writing SQL queries to extract data."
                  ]}
                  correctIndex={1}
                  selectedIndex={1}
                  incorrectIndex={3}
              />
              <Question 
                  question="Which type of data is qualitative?" 
                  options={[
                      "The age of employees in a company.",
                      "The monthly sales numbers of a product.",
                      "Customer feedback from a survey describing product satisfaction.",
                      "The temperature readings of a city over a week."
                  ]}
                  correctIndex={2}
                  selectedIndex={2}
              />
              <Question 
                  question="What is the primary purpose of data analysis?" 
                  options={[
                      "To organize data alphabetically",
                      "To make informed decisions based on insights derived from data",
                      "To collect as much data as possible",
                      "To replace manual processes with automated systems"
                  ]}
                  correctIndex={1}
                  selectedIndex={1}
              />
              <Question 
                  question="Which of the following best describes the purpose of data analysis?" 
                  options={[
                      "Collecting raw data from various sources without any processing.",
                      "Transforming data into meaningful insights to support decision-making.",
                      "Storing data securely for long-term preservation.",
                      "Creating complex algorithms without interpreting their results."
                  ]}
                  correctIndex={1}
                  selectedIndex={1}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

function Question({ question, options, correctIndex, selectedIndex, incorrectIndex }) {
  return (
    <div className="mt-6">
      <p className="text-gray-800 font-medium">{question}</p>
      <div className="mt-2">
        {options.map((option, index) => (
          <div key={index} className={`flex items-center p-2 border rounded-lg mt-2 ${index === correctIndex ? 'border-green-500 bg-green-50' : 'border-gray-300'} ${index === selectedIndex && index !== correctIndex ? 'border-red-500 bg-red-50' : ''}`}>
            <input type="radio" className="form-radio h-4 w-4 text-blue-600" checked={index === selectedIndex} readOnly />
            <label className="ml-2 text-gray-700">{option}</label>
            {index === correctIndex && <i className="fas fa-check text-green-500 ml-auto"></i>}
            {index === selectedIndex && index !== correctIndex && <i className="fas fa-times text-red-500 ml-auto"></i>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learningdetailquiz;
