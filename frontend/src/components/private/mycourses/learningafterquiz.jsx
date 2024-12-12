import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Impor useNavigate
import Logo from '/logo/logo.png';

const Learningafterquiz = () => {
  const [isModuleOpen, setIsModuleOpen] = useState(Array(6).fill(false)); // Array untuk menyimpan status terbuka/tutup untuk setiap modul
  const [selectedModule, setSelectedModule] = useState(null); // Menambahkan state untuk modul yang dipilih
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

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
    navigate('/dashboard/mycourses/learningquiz');
  };

  const handleViewDetailClick = () => {
    // Arahkan pengguna ke halaman detail setelah klik "View Detail"
    navigate('/dashboard/mycourses/learningviewdetail');
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

        <section className="flex-1 p-8 bg-white shadow">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Rules</h1>
            <p className="mt-4 text-gray-700">This quiz aims to test your knowledge of the material Introduction to Data Analysis.</p>
            <p className="mt-2 text-gray-700">There are 5 questions that must be completed in this quiz. Some of the conditions are as follows:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Passing score requirement: 80%</li>
              <li>Exam duration: 5 minutes</li>
            </ul>
            <p className="mt-2 text-gray-700">If you do not meet the passing score, you must wait for 1 minute before retaking the quiz. Use the waiting time to review the previous material, okay?</p>
            <p className="mt-2 text-gray-700">Good luck with your work!</p>
          </div>

          {/* Tombol Start berada di tengah antara Rules dan Result */}
          <div className="flex justify-end mb-8">
            <button onClick={handleStartClick} className="bg-blue-700 text-white px-4 py-2 rounded">Start</button>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-blue-700">Result</h2>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2 text-left">Date</th>
                  <th className="border p-2 text-left">Percentage</th>
                  <th className="border p-2 text-left">Status</th>
                  <th className="border p-2 text-left">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">21/11/24</td>
                  <td className="border p-2">80%</td>
                  <td className="border p-2">Passed</td>
                  <td className="border p-2 text-blue-500">
                    <button onClick={handleViewDetailClick}>View Detail</button>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">-</td>
                  <td className="border p-2">-</td>
                  <td className="border p-2">-</td>
                  <td className="border p-2">-</td>
                </tr>
                <tr>
                  <td className="border p-2">-</td>
                  <td className="border p-2">-</td>
                  <td className="border p-2">-</td>
                  <td className="border p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Learningafterquiz;
