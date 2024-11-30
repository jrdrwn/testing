import React from 'react'
import Img from '../../../assets/public/imgcalltoaction.svg';

const CallToAction = () => {
  return (
<div className="flex flex-col items-center justify-center min-h-screen">
                        <img src={Img} alt="Three people sitting at a table with laptops, smiling and talking" className="max-w-4xl" />
                        <div className="p-8 text-center">
                            <h1 className="text-2xl font-bold text-blue-700 mb-4">Ready to Start Your Learning Journey?</h1>
                            <p className="text-gray-600 mb-6">Join thousands of students who have already built their future with PINTURA.</p>
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300">
                                Get Started Now <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                </div>
  )
}

export default CallToAction
