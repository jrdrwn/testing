import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Menambahkan useNavigate
import Logo from '../../../assets/logo/logo.png';

const Learningquiz = () => {
  const [isModuleOpen, setIsModuleOpen] = useState(Array(6).fill(false)); 
  const [activeQuestion, setActiveQuestion] = useState(4); 
  const [timeElapsed, setTimeElapsed] = useState(0); 
  const [showConfirmation, setShowConfirmation] = useState(false); 

  const navigate = useNavigate(); 
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prevTime => prevTime + 1);
    }, 1000);
    
    return () => clearInterval(timer); // Membersihkan timer saat komponen dibersihkan
  }, []);

  const toggleModule = (index) => {
    const updatedModuleStatus = [...isModuleOpen];
    updatedModuleStatus[index] = !updatedModuleStatus[index];
    setIsModuleOpen(updatedModuleStatus);
  };

  const handleQuestionClick = (questionNumber) => {
    setActiveQuestion(questionNumber); 
  };

  const handleNextClick = () => {
    if (activeQuestion === 5) {
      setShowConfirmation(true); 
    } else {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  const handleStartClick = () => {
    setShowConfirmation(true);
  };

  const handleCancel = () => {
    setShowConfirmation(false); // Sembunyikan konfirmasi jika dibatalkan
  };

  const handleContinue = () => {
    setShowConfirmation(false); 
    navigate('/dashboard/workshop/learningafterquiz');
  };

  // Format waktu menjadi MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
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
            <div className="bg-white p-4 border-b border-gray-300 mb-2">
              <div className="flex justify-between items-center">
                <h3 className={`text-lg font-semibold ${isModuleOpen[0] ? 'bg-blue-600 text-white' : 'text-black'}`}>Module 1</h3>
                <button onClick={() => toggleModule(0)} className="text-black">
                  {isModuleOpen[0] ? (
                    <i className="fas fa-chevron-down"></i>
                  ) : (
                    <i className="fas fa-chevron-right"></i>
                  )}
                </button>
              </div>
              <p className="text-sm text-black">Introduction to Data Analysis</p>
              {isModuleOpen[0] && (
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center text-black border-b border-gray-300 py-2">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Lesson 1.1: What is Data Analysis?</span>
                    <i className="fas fa-chevron-right ml-auto"></i>
                  </li>
                  <li className="flex items-center text-black border-b border-gray-300 py-2">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Lesson 1.2: Types of Data</span>
                    <i className="fas fa-chevron-right ml-auto"></i>
                  </li>
                  <li className="flex items-center text-black border-b border-gray-300 py-2">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Lesson 1.3: Tools and Technologies</span>
                    <i className="fas fa-chevron-right ml-auto"></i>
                  </li>
                  <li className="flex items-center text-black border-b border-gray-300 py-2">
                    <i className="fas fa-check-circle text-gray-500 mr-2"></i>
                    <span>Quiz</span>
                    <i className="fas fa-chevron-right ml-auto"></i>
                  </li>
                </ul>
              )}
            </div>

            {["Module 2", "Module 3", "Module 4", "Module 5", "Module 6"].map((module, index) => (
              <div key={index} className="bg-white p-4 border-b border-gray-300 mb-2 shadow">
                <div className="flex justify-between items-center">
                  <h3 className={`text-lg font-semibold ${isModuleOpen[index + 1] ? 'bg-blue-600 text-white' : 'text-black'}`}>{module}</h3>
                  <button onClick={() => toggleModule(index + 1)} className="text-black">
                    {isModuleOpen[index + 1] ? (
                      <i className="fas fa-chevron-down"></i>
                    ) : (
                      <i className="fas fa-chevron-right"></i>
                    )}
                  </button>
                </div>
                <p className="text-sm text-black">
                  {module === "Module 2" ? "Data Collection and Cleaning" : 
                   module === "Module 3" ? "Data Manipulation with Excel & SQL" : 
                   module === "Module 4" ? "Data Visualization with Power BI" : 
                   module === "Module 5" ? "Basic Statistical Analysis" : 
                   "Real-world Case Studies and Applications"}
                </p>
                {isModuleOpen[index + 1] && (
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center text-black border-b border-gray-300 py-2">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span>Lesson {index + 2}.1: Example Lesson</span>
                      <i className="fas fa-chevron-right ml-auto"></i>
                    </li>
                    <li className="flex items-center text-black border-b border-gray-300 py-2">
                      <i className="fas fa-check-circle text-gray-500 mr-2"></i>
                      <span>Quiz</span>
                      <i className="fas fa-chevron-right ml-auto"></i>
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
        <section className="flex-1 bg-white p-8 shadow">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">Questions category: Introduction to Data Analysis</h1>
            <div className="text-lg font-semibold text-gray-700">{formatTime(timeElapsed)}</div>
          </div>
          <div className="flex mb-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => handleQuestionClick(num)}
                className={`w-10 h-10 flex items-center justify-center rounded mr-2 ${
                  activeQuestion === num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">What is the primary purpose of data analysis?</h2>
            <ul>
              <li className="mb-2">
                <label className="flex items-center text-black">
                  <input type="radio" name="question-1" className="mr-2" />
                  To make informed decisions
                </label>
              </li>
              <li className="mb-2">
                <label className="flex items-center text-black">
                  <input type="radio" name="question-1" className="mr-2" />
                  To collect more data
                </label>
              </li>
              <li className="mb-2">
                <label className="flex items-center text-black">
                  <input type="radio" name="question-1" className="mr-2" />
                  To automate processes
                </label>
              </li>
            </ul>
          </div>
          <div className="flex justify-between">
            {activeQuestion > 1 && (
              <button className="text-blue-600">Previous</button>
            )}
            <button onClick={handleNextClick} className="text-blue-600">
              {activeQuestion === 5 ? 'End Quiz' : 'Next'}
            </button>
          </div>
        </section>
      </main>
      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-md w-full">
            <div className="flex items-center mb-4">
              <i className="fas fa-info-circle text-blue-600 text-xl mr-2"></i>
              <h2 className="text-lg font-semibold text-gray-800">Are you sure you want to end this quiz?</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Please double-check your answer before submitting, as you won't be able to make changes afterward.
            </p>
            <div className="flex justify-end space-x-4">
              <button onClick={handleCancel} className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100">Cancel</button>
              <button onClick={handleContinue} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Continue</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learningquiz;
