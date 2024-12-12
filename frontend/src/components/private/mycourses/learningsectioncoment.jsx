import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Logo from '/logo/logo.png';

const LearningaSectionComent = () => {
  const [isModuleOpen, setIsModuleOpen] = useState(Array(6).fill(false)); // Array for tracking the open/close state for each module
  const [selectedModule, setSelectedModule] = useState(null); // Track selected module
  const [selectedLesson, setSelectedLesson] = useState(null); // Track selected lesson
  const navigate = useNavigate(); // Use useNavigate for navigation

  const toggleModule = (index) => {
    const updatedModuleStatus = [...isModuleOpen];
    updatedModuleStatus[index] = !updatedModuleStatus[index];
    setIsModuleOpen(updatedModuleStatus);

    // Ensures the same module can be opened and closed
    if (selectedModule === index) {
      setSelectedModule(null);
    } else {
      setSelectedModule(index);
    }
  };

  const toggleLesson = (lessonIndex) => {
    // Toggle lesson content display
    setSelectedLesson(selectedLesson === lessonIndex ? null : lessonIndex);
  };

  const handleDownloadClick = () => {
    navigate('/dashboard/mycourses/learningsectionvideo');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow p-4 flex flex-col items-center">
        <div className="flex justify-center w-full mb-4">
          <img src={Logo} alt="PINTUR Logo" className="h-16 w-16 object-contain" />
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="text-sm text-gray-500">
            Home &gt; My Courses &gt; Data Analysis Fundamentals &gt; Module 1 &gt; Lesson 1.2
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">Previous</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Next</a>
          </nav>
        </div>
      </header>
      <main className="flex flex-1 p-4 gap-5">
        {/* Module Section */}
        <aside className="w-1/4 bg-white p-4 rounded-lg shadow">
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
                              module === "Module 5" ? "Probability" :
                                "Case Study 1"}</span>
                      <button onClick={() => toggleLesson(`${index + 1}.1`)} className="ml-auto">
                        {selectedLesson === `${index + 1}.1` ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                      </button>
                    </li>
                    {selectedLesson === `${index + 1}.1` && (
                      <li className="p-2 pl-8">
                        <div className="text-sm text-black">This is the content for Lesson {index + 1}.1</div>
                      </li>
                    )}
                    <li className="flex items-center text-black border-b border-gray-300 py-2">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span>Lesson {index + 1}.2: {module === "Module 1" ? "Types of Data" :
                        module === "Module 2" ? "Data Cleaning Techniques" :
                          module === "Module 3" ? "SQL Basics" :
                            module === "Module 4" ? "Advanced Charts" :
                              module === "Module 5" ? "Probability" :
                                "Case Study 2"}</span>
                      <button onClick={() => toggleLesson(`${index + 1}.2`)} className="ml-auto">
                        {selectedLesson === `${index + 1}.2` ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                      </button>
                    </li>
                    {selectedLesson === `${index + 1}.2` && (
                      <li className="p-2 pl-8">
                        <div className="text-sm text-black">This is the content for Lesson {index + 1}.2</div>
                      </li>
                    )}
                    {module === "Module 1" && (
                      <li className="flex items-center text-black border-b border-gray-300 py-2">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        <span>Lesson 1.3: Tools and Technologies</span>
                        <button onClick={() => toggleLesson("1.3")} className="ml-auto">
                          {selectedLesson === "1.3" ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                        </button>
                      </li>
                    )}
                    {selectedLesson === "1.3" && (
                      <li className="p-2 pl-8">
                        <div className="text-sm text-black">This is the content for Lesson 1.3</div>
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
          </div>
        </aside>

        {/* Main Content Section */}
        <div className="flex flex-col w-1/2 bg-white p-4 rounded-lg shadow mb-4 gap-5">
          {/* Video Section */}
          <div className="bg-black rounded-lg overflow-hidden">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/n7Yim68hgKs"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video Tutorial"
            />
          </div>

          {/* Comment and Downloads Section */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-comment"></i>
              <span>Comment 27</span>
            </div>
            <button onClick={handleDownloadClick} className="flex items-center space-x-2">
  <i className="fas fa-download"></i>
  <span>Downloads 7</span>
</button>
          </div>

          {/* Comment Section */}
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-start space-x-4 mb-4">
              <img src="https://placehold.co/40x40" alt="User profile picture" className="w-10 h-10 rounded-full" />
              <div>
                <div className="text-sm font-semibold">Shakira, at 1:02, 2 days ago</div>
                <div className="text-sm">"Hi everyone! I'm having trouble understanding how to clean messy datasets in Excel. Any tips?"</div>
                <div className="flex items-center space-x-2 text-gray-500 text-sm mt-2">
                  <i className="fas fa-thumbs-up"></i>
                  <span>23</span>
                  <i className="fas fa-reply"></i>
                  <span>2</span>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4 mb-4">
              <img src="https://placehold.co/40x40" alt="User profile picture" className="w-10 h-10 rounded-full" />
              <div>
                <div className="text-sm font-semibold">Edward, replied</div>
                <div className="text-sm">"Hi Shakira! Sure thing! Use the 'Remove Duplicates' and 'Text to Columns' tools under the Data tab in Excel. These are great for cleaning up messy data!"</div>
                <div className="flex items-center space-x-2 text-gray-500 text-sm mt-2">
                  <i className="fas fa-thumbs-up"></i>
                  <span>18</span>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4 mb-4">
              <img src="https://placehold.co/40x40" alt="User profile picture" className="w-10 h-10 rounded-full" />
              <div>
                <div className="text-sm font-semibold">Jane, at 1:10, 1 day ago</div>
                <div className="text-sm">"Can anyone explain how to visualize the cleaned data in Power BI?"</div>
                <div className="flex items-center space-x-2 text-gray-500 text-sm mt-2">
                  <i className="fas fa-thumbs-up"></i>
                  <span>12</span>
                  <i className="fas fa-reply"></i>
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Add Comment Section */}
          <div className="flex mt-4">
            <input
              type="text"
              className="flex-grow p-2 border rounded-l-lg"
              placeholder="Write a comment..."
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">Add Comment</button>
          </div>
        </div>

        {/* Sidebar Section */}
        <aside className="w-1/4 bg-white p-4 rounded-lg shadow">
          <div className="flex items-center border border-blue-500 rounded-lg p-4 w-80 bg-white">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex items-center space-x-2">
                <i className="fas fa-file-alt text-blue-500"></i>
                <span className="text-black">Lesson Type</span>
                <span className="text-gray-500 ml-2">Pre-recorded</span> {/* Added text with gray color */}
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-signal text-blue-500"></i>
                <span className="text-black">Skill Level</span>
                <span className="text-gray-500 ml-2">Beginner</span> {/* Added text with gray color */}
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-clock text-blue-500"></i>
                <span className="text-black">Duration</span>
                <span className="text-gray-500 ml-2">6 modules, 20 hours</span> {/* Added text with gray color */}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold">Overview</div>
            <div className="text-sm text-gray-500">Course by Dr. Andi Prasetyo, Ph.D. in collaboration with Universitas Indonesia</div>
            <div className="text-lg font-semibold text-blue-800 mt-2">Data Analysis Fundamentals</div>
            <div className="flex space-x-2 mt-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Data Analysis</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Statistics</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Excel</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">SQL</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Power BI</span>
            </div>
            <div className="text-sm text-gray-500 mt-4">
              In this course, you will master the foundational skills of data analysis with practical applications in real-world scenarios. Learn how to collect, clean, and manipulate data effectively, create compelling data visualizations, and apply basic statistical techniques to drive data-driven decision-making. This course is suitable for beginners and those looking to strengthen their analytical skills.
            </div>
            <div className="text-lg font-semibold mt-4">What You'll Learn:</div>
            <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
              <li>Principles of data analysis</li>
              <li>Data collection and cleaning techniques</li>
              <li>Basic statistical methods and techniques</li>
              <li>Introduction to Excel, SQL, and Power BI for data analysis</li>
              <li>Hands-on case studies and examples</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default LearningaSectionComent;
