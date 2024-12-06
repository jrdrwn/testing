import React from 'react';

const LearningOverview = () => {
    return (
        <div className="max-w-6xl mx-auto p-4">
            <header className="flex items-center justify-between py-4">
                <h1 className="text-2xl font-bold text-blue-600">PINTUR</h1>
            </header>
            <nav className="text-sm text-gray-600 mb-4">
                <a href="#" className="hover:underline">Home</a> &gt; 
                <a href="#" className="hover:underline">Workshop</a> &gt; 
                <a href="#" className="hover:underline">Portfolio Building</a> &gt; 
                <span>5 Portfolio Tips to Land Your First UX Job</span>
            </nav>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3">
                    <div className="bg-black mb-4">
                        <img src="https://placehold.co/800x450?text=Video+Placeholder" alt="Video Placeholder" className="w-full"/>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-300 mb-4">
                        <button className="py-2 px-4 text-gray-600 border-b-2 border-blue-600">Overview</button>
                        <button className="py-2 px-4 text-gray-600">Comment <span className="text-gray-400">(27)</span></button>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">5 Portfolio Tips to Land Your First UX Job</h2>
                    <div className="flex items-center text-gray-600 mb-4">
                        <FaFacebookF className="mr-2" />
                        <FaTwitter className="mr-2" />
                        <FaLinkedinIn className="mr-2" />
                        <FaGooglePlusG className="mr-2" />
                        <FaEnvelope />
                        <span className="ml-auto text-gray-400">2.5k</span>
                        <FaHeart className="text-blue-600 ml-1" />
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">About This Video</h3>
                        <p className="text-gray-700 mb-2">Learn how to create an impressive portfolio that will grab the attention of recruiters. Sarah Lee, a seasoned UI/UX Designer at Airbnb, shares her top five actionable tips for building a portfolio that showcases your skills and creativity, even if you're just starting out in the industry.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">Details</h3>
                        <p className="text-gray-700 mb-1">Length: 12 minutes</p>
                        <p className="text-gray-700 mb-1">Language: English</p>
                        <p className="text-gray-700 mb-1">Difficulty Level: Beginner</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Key Learning Points</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Showcase your process, not just the finished product.</li>
                            <li>Select only your best work—quality over quantity.</li>
                            <li>Tailor your portfolio for each job application.</li>
                            <li>Include case studies with metrics and outcomes.</li>
                            <li>Ensure your portfolio is easy to navigate and visually appealing.</li>
                        </ul>
                    </div>
                </div>
                <aside className="lg:w-1/3 lg:pl-8">
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h3 className="text-lg font-bold mb-2">Sarah Lee</h3>
                        <p className="text-gray-700 mb-2">Current Position</p>
                        <p className="text-gray-700 mb-2"><FaBriefcase className="mr-2" />UI/UX Designer at Airbnb</p>
                        <p className="text-gray-700 mb-2">Over 8 years in designing intuitive, user-friendly interfaces for global companies.</p>
                        <h4 className="text-md font-bold mb-2">Achievements:</h4>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Designed the Airbnb homepage experience, improving user retention by 20%.</li>
                            <li>Conducted UX workshops at international design conferences.</li>
                            <li>Mentored over 50 aspiring designers through her online courses.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-bold mb-2">Related Video</h3>
                        <div className="flex mb-4">
                            <img src="https://placehold.co/100x100?text=Thumbnail" alt="Thumbnail" className="w-1/3 rounded-lg mr-4"/>
                            <div>
                                <p className="text-sm text-gray-700 mb-1">15 minutes</p>
                                <h4 className="text-md font-bold mb-1">How to Create a Winning UX Case Study</h4>
                                <p className="text-sm text-gray-700">James Patel, Senior UX Researcher at Google</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img src="https://placehold.co/100x100?text=Thumbnail" alt="Thumbnail" className="w-1/3 rounded-lg mr-4"/>
                            <div>
                                <p className="text-sm text-gray-700 mb-1">10 minutes</p>
                                <h4 className="text-md font-bold mb-1">Building Your Personal Brand as a Designer</h4>
                                <p className="text-sm text-gray-700">Ivan Lim, Creative Lead at Spotify</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default LearningOverview;
