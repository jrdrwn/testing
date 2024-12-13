import React from 'react'
import { Link } from "react-router-dom"; 
import Img from '../../../assets/public/imgsectionv3.svg';

const SectionV3 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
                    <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6">
                        <div className="w-full md:w-1/2">
                            <img src={Img} alt="Illustration of a person with headphones using a laptop" className="w-full h-auto"/>
                        </div>
                        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
                            <h2 className="text-3xl font-bold text-blue-700">Why PINTURA?</h2>
                            <p className="mt-4 text-gray-600">Transform your learning journey with our comprehensive platform designed specifically for Indonesian students’ in the digital age.</p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center">
                                    <i className="fas fa-check-circle text-blue-700 mr-2"></i>
                                    <span className="font-semibold">Industry-Relevant Skills</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check-circle text-blue-700 mr-2"></i>
                                    <span className="font-semibold">Professional Mentorship</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check-circle text-blue-700 mr-2"></i>
                                    <span className="font-semibold">Comprehensive Career Support</span>
                                </li>
                            </ul>
                            <div className="mt-6 flex space-x-4">
                                <Link to="/login"> 
                                <button className="bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
                                    Get started
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </button>
                                </Link>
                                <Link to="/about">
                                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md">
                                    Learn more
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default SectionV3
