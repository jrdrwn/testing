import React from 'react'

const DetailSkills = () => {
  return (
<div className="flex flex-col md:flex-row justify-center items-start p-8">
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">Details</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <i className="fas fa-clock text-blue-700 mr-2"></i>
                                <span>Duration: Approximately 21 hours</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-language text-blue-700 mr-2"></i>
                                <span>Language: English with Indonesian subtitles</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-star text-blue-700 mr-2"></i>
                                <span>Skill Level: Beginner to Intermediate</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-info-circle text-blue-700 mr-2"></i>
                                <span>Prerequisites: None required; basic knowledge of statistics is beneficial.</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-certificate text-blue-700 mr-2"></i>
                                <span>Certificate: Yes, certificate awarded upon successful completion</span>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">Skills You Will Gain</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-blue-700 mr-2"></i>
                                <span>Data Cleaning and Preparation</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-blue-700 mr-2"></i>
                                <span>Data Manipulation with Excel and SQL</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-blue-700 mr-2"></i>
                                <span>Data Visualization with Power BI</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-blue-700 mr-2"></i>
                                <span>Basic Statistical Analysis</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-blue-700 mr-2"></i>
                                <span>Problem-Solving with Real-world Data</span>
                            </li>
                        </ul>
                    </div>
                </div>
  )
}

export default DetailSkills
