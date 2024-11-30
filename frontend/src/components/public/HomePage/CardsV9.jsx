import React from 'react'

const CardsV9 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                    <h1 className="text-3xl font-bold text-blue-700 mb-8">Highly effective solutions</h1>
                    <div className="flex space-x-8">
                        <div className="bg-blue-700 text-white rounded-lg shadow-lg p-8 w-64 text-center">
                            <div className="text-4xl font-bold mb-4">01</div>
                            <h2 className="text-xl font-bold mb-2">Skill-Based Learning</h2>
                            <p>Access practical courses aligned with industry needs, from coding to project management</p>
                        </div>
                        <div className="bg-blue-700 text-white rounded-lg shadow-lg p-8 w-64 text-center">
                            <div className="text-4xl font-bold mb-4">02</div>
                            <h2 className="text-xl font-bold mb-2">Career Support</h2>
                            <p>Get professional guidance through resume workshops and interview simulations</p>
                        </div>
                        <div className="bg-blue-700 text-white rounded-lg shadow-lg p-8 w-64 text-center">
                            <div className="text-4xl font-bold mb-4">03</div>
                            <h2 className="text-xl font-bold mb-2">Mental Wellness</h2>
                            <p>Access counseling services and stress management workshops</p>
                        </div>
                    </div>
                </div>
  )
}

export default CardsV9
