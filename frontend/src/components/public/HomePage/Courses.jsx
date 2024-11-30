import React from 'react';

const Courses = () => {
    const courses = [
        {
            title: "Data Science Fundamentals",
            description: "Learn essential data analysis skills and tools",
            category: "Data Science",
            image: "https://placehold.co/600x400?text=Data+Science+Image",
        },
        {
            title: "Full-Stack Development",
            description: "Master modern web development technologies",
            category: "Full-Stack",
            image: "https://placehold.co/600x400?text=Full-Stack+Image",
        },
        {
            title: "Project Management",
            description: "Develop essential project management skills",
            category: "Project Management",
            image: "https://placehold.co/600x400?text=Project+Management+Image",
        },
        {
            title: "User-Centric Web Design: Strategies for Better UI/UX",
            description: "Become a UX/UI Designer! Master Mobile and Web Design, User Interface + User Experience",
            category: "UI/UX Design",
            image: "https://placehold.co/600x400?text=UI/UX+Design+Image",
        },
        {
            title: "Adobe CC Masterclass: Photoshop, Illustrator, & XD",
            description: "Learn graphic design today with Photoshop, Illustrator, Adobe XD, InDesign & more",
            category: "Graphic Design",
            image: "https://placehold.co/600x400?text=Graphic+Design+Image",
        },
        {
            title: "Business Analysis Fundamentals - ECBA, CCBA, CBAP Endorsed",
            description: "Set yourself up for success and learn the key business analysis concepts to thrive in your Business Analyst career!",
            category: "Business Analysis",
            image: "https://placehold.co/600x400?text=Business+Analysis+Image",
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-4">See Our Courses</h1>
            <div className="flex justify-center mb-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Popular</button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2">Development</button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2">Business</button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Finance</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-48 object-cover"
                            />
                            <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                {course.category}
                            </span>
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
                                Learn More <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button className="px-3 py-1 border rounded-l">
                    <i className="fas fa-chevron-left"></i> Previous
                </button>
                <button className="px-3 py-1 border">1</button>
                <button className="px-3 py-1 border">2</button>
                <button className="px-3 py-1 border">3</button>
                <button className="px-3 py-1 border">4</button>
                <button className="px-3 py-1 border">5</button>
                <button className="px-3 py-1 border">6</button>
                <button className="px-3 py-1 border rounded-r">
                    Next <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Courses;
