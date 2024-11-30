import React from 'react'

const ValueSection = () => {
  return (
    <div className="flex justify-center items-start space-x-8 p-8">
                    <div className="max-w-xs">
                        <h2 className="text-blue-700 font-bold text-lg">Skill-Based Courses</h2>
                        <p className="text-gray-700 mt-2">
                            Access hands-on skill courses that go beyond theory—learn coding, data analysis, project management, and more, with formats like interactive videos and project-based tasks.
                        </p>
                    </div>
                    <div className="max-w-xs">
                        <h2 className="text-blue-700 font-bold text-lg">Career Support</h2>
                        <p className="text-gray-700 mt-2">
                            Prepare for your future with career workshops, resume tips, interview simulations, and mentorship from professionals and alumni.
                        </p>
                    </div>
                    <div className="max-w-xs">
                        <h2 className="text-blue-700 font-bold text-lg">Mental Wellness</h2>
                        <p className="text-gray-700 mt-2">
                            Get support for managing academic pressure with online counseling sessions, stress-management workshops, and a community of mental health resources.
                        </p>
                    </div>
                </div>
  )
}

export default ValueSection
