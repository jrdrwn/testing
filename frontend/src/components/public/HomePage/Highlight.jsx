import React from 'react'
import img from '../../../assets/public/imghighlight.svg';

const Highlight = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-4xl font-bold text-blue-800 mb-8">Highlight Events</h1>
                    <div className="relative flex items-center justify-center">
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-blue-200 rounded-lg p-6 shadow-lg w-96">
                            <div className="mb-4">
                                <span className="inline-block bg-blue-800 text-white text-xs font-semibold px-2 py-1 rounded">Webinar</span>
                            </div>
                            <h2 className="text-2xl font-bold text-blue-800 mb-4">Data Science Career Week 2024</h2>
                            <div className="flex items-center">
                                <img src="https://placehold.co/40x40" alt="Profile picture of the speaker" className="w-10 h-10 rounded-full mr-3"/>
                                <div>
                                    <p className="text-gray-800 font-semibold">Xaviera Putri Ardianingsih Listyo</p>
                                    <p className="text-gray-500">Des 26, 2024</p>
                                </div>
                            </div>
                        </div>
                        <img src={img} alt="Laptop displaying data charts" className="rounded-lg shadow-lg"/>
                    </div>
                </div>
  )
}

export default Highlight
