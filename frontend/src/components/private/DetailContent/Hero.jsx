import React from 'react'

const Hero = () => {
  return (
<div class="flex flex-col md:flex-row items-center justify-center p-4 bg-gray-100">
                    <div class="md:w-1/2 p-4">
                        <img src="https://placehold.co/600x400" alt="Person working on a laptop displaying data analysis graphs" class="rounded-lg shadow-lg w-full"/>
                    </div>
                    <div class="md:w-1/2 p-4">
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <div class="flex items-center mb-4">
                                <img src="https://placehold.co/40x40" alt="University of Indonesia logo" class="w-10 h-10 rounded-full mr-2"/>
                                <h2 class="text-gray-700 text-lg font-semibold">University of Indonesia</h2>
                            </div>
                            <h1 class="text-3xl font-bold text-blue-900 mb-2">Data Analysis Fundamentals</h1>
                            <p class="text-gray-600 mb-4">Master the basics of data analysis with practical industry application.</p>
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
