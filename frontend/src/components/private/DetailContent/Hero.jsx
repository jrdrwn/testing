import React from 'react'
import {useLocation} from 'react-router-dom';

const Hero = () => {
  const location = useLocation();
  const course = location.state.course;
  
  if (!course) {
    return(
    <div className='p-8'>
      <h1 className='text-2xl font-semibold text-gray-700'>No course selected</h1>
    </div>
  );
  }

  return (
<div class="flex flex-col md:flex-row items-center justify-center p-4 bg-gray-100">
                    <div class="md:w-1/2 p-4">
                        <img src={course.image_url} alt={course.title} class="rounded-lg shadow-lg w-full"/>
                    </div>
                    <div class="md:w-1/2 p-4">
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <div class="flex items-center mb-4">
                                <img src="https://placehold.co/40x40" alt="University of Indonesia logo" class="w-10 h-10 rounded-full mr-2"/>
                                <h2 class="text-gray-700 text-lg font-semibold">{course.institution}</h2>
                            </div>
                            <h1 class="text-3xl font-bold text-blue-900 mb-2">{course.title}</h1>
                            <p class="text-gray-600 mb-4">{course.description}</p>
                            <div class="flex items-center mb-4">
                                <div class="flex items-center text-yellow-500 mr-2">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <p class="text-gray-600">(4.0/5) based on 1,200 reviews</p>
                            </div>
                            <div class="flex items-center">
                                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4">Enroll Now</button>
                                <p class="text-gray-600">Using 5 Credits</p>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Hero
