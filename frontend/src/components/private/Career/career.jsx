import React from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
    return (
        <div>
            <main className="container mx-auto px-4 py-8">
                <section className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-blue-600">Highlight Event</h2>
                    <p className="text-gray-600">Don't miss out on this exclusive opportunity to elevate your career and gain insights from top speakers — secure your spot now!</p>
                    <div className="mt-4 flex justify-center">
                        <img src="https://placehold.co/800x300" alt="Highlight Event" className="rounded-lg shadow-lg" />
                    </div>
                </section>

                <section className="mb-8">
    <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-blue-800">Videos Content</h3>
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full bg-white shadow-md">
            <span className="text-blue-600 font-medium">Category</span>
            <i className="fas fa-filter text-blue-600 ml-2"></i>
        </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Repeatable content cards */}
        {[
            { title: "Crafting a Resume That Stands Out", speaker: "Michael Anderson", role: "HR Specialist at Google", time: "12 min" },
            { title: "Digital Portfolio Best Practices", speaker: "Sarah Lee", role: "UI/UX Designer at Airbnb", time: "15 min" },
            { title: "LinkedIn Profile Hacks", speaker: "Robert Tan", role: "LinkedIn Trainer", time: "10 min" },
            { title: "Elevate Your Personal Brand", speaker: "Rachel Lim", role: "Marketing Strategist at Amazon", time: "18 min" },
            { title: "Acing Behavioral Interviews", speaker: "Jonathan Chen", role: "HR Manager at Amazon", time: "20 min" },
            { title: "Ace Your Next Job Interview", speaker: "Imran Usman", role: "COO of Ruangguru", time: "15 min" }
        ].map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <img src="https://placehold.co/300x200" alt={video.title} className="rounded-lg mb-4" />
                <h4 className="text-lg font-semibold text-blue-800">{video.title}</h4>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                        <img src="https://placehold.co/40x40" alt={video.speaker} className="rounded-full mr-2" />
                        <div>
                            <p className="text-gray-600">{video.speaker}</p>
                            <p className="text-gray-400 text-sm">{video.role}</p>
                        </div>
                    </div>
                    {/* Tambahan untuk menempatkan waktu di kanan sejajar dengan speaker */}
                    <span className="bg-gray-200 text-gray-600 text-sm px-2 py-1 rounded-full ml-4">{video.time}</span>
                </div>
            </div>
        ))}
    </div>
    <div className="flex justify-center mt-4">
        <nav className="inline-flex space-x-2">
            <a href="#" className="px-3 py-1 border rounded-full text-gray-600">Previous</a>
            <a href="#" className="px-3 py-1 border rounded-full text-gray-600">1</a>
            <a href="#" className="px-3 py-1 border rounded-full text-gray-600">2</a>
            <a href="#" className="px-3 py-1 border rounded-full text-gray-600">3</a>
            <a href="#" className="px-3 py-1 border rounded-full text-gray-600">4</a>
            <a href="#" className="px-3 py-1 border rounded-full text-gray-600">5</a>
            <a href="#" className="px-3 py-1 border rounded-full text-gray-600">6</a>
            <a href="#" className="px-3 py-1 border rounded-full text-gray-600">Next</a>
        </nav>
    </div>
</section>


                <section className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <h3 className="text-xl font-semibold text-gray-800 mr-2">Latest Articles</h3>
                            <button className="text-blue-600">→</button>
                        </div>
                    </div>
                    <section className="mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                            {/* Repeatable article cards */}
                            {[ 
                                { title: "How to Create a Winning Resume", date: "Nov 21, 2024", category: "Resume Writing", description: "Tips and steps to create a resume that catches the recruiter's attention." },
                                { title: "Interview Preparation 101", date: "Nov 20, 2024", category: "Interview Preparation", description: "Simulations and job interview guides to boost confidence." },
                                { title: "Mastering LinkedIn Optimization", date: "Nov 19, 2024", category: "Personal Branding", description: "Guide to maximizing your LinkedIn profile to be more professional and effective." }
                            ].map((article, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex">
                                    <img src="https://placehold.co/150x100" alt={article.title} className="rounded-lg mb-4" />
                                    <div className="ml-4">
                                        <div className="flex items-center text-gray-500 text-sm mb-2">
                                            <i className="far fa-calendar-alt mr-2"></i>
                                            <span>{article.date}</span>
                                            <span className="mx-2">—</span>
                                            <i className="fas fa-tag mr-2"></i>
                                            <span>{article.category}</span>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800">
                                            <Link to="/dashboard/workshop/article" className="hover:text-blue-600">{article.title}</Link>
                                        </h4>
                                        <p className="text-gray-600 mt-2">{article.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default Career;
