import React from 'react';
import Logo from '/logo/logo.png';
import { FaExclamationCircle, FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom'
const LearningComent = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <header className="relative py-6">
        {/* Logo di tengah */}
        <div className="absolute inset-0 flex justify-center">
          <img src={Logo} alt="PINTUR Logo" className="h-10 w-auto" />
        </div>
        {/* Navigasi di posisi semula */}
        <nav className="text-sm text-gray-500 mt-12">
          <a href="#" className="hover:underline">Home</a> &gt;{' '}
          <a href="#" className="hover:underline">Workshop</a> &gt;{' '}
          <a href="#" className="hover:underline">Portfolio Building</a> &gt;{' '}
          <span className="text-gray-700 font-semibold">5 Portfolio Tips to Land Your First UX Job</span>
        </nav>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Video and Comments Section */}
        <div className="lg:col-span-2">
          {/* Video */}
          <div className="bg-black rounded-lg overflow-hidden mb-4">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/n7Yim68hgKs"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video Tutorial"
            />
          </div>
          {/* Tab Navigation */}
          <div className="flex items-center justify-between border-b border-gray-300 mb-4">
            <Link to="/dashboard/workshop/learningoverview" className="py-2 px-4 text-gray-500 flex items-center space-x-2">
              <FaExclamationCircle className="text-gray-500" />
              <span>Overview</span>
            </Link>
            <button className="py-2 px-4 text-blue-600 border-b-2 border-blue-600 flex items-center space-x-2">
              <FaComment className="text-blue-600" />
              <span>Comment <span className="text-gray-400">(2)</span></span>
            </button>
          </div>
          {/* Comments Section */}
          <div className="space-y-6">
            {/* Comment 1 */}
            <div className="flex items-start">
              <img src="https://placehold.co/40x40" alt="User avatar" className="rounded-full mr-4" />
              <div>
                <p className="text-gray-800 font-semibold">Kevin Wijaya <span className="text-gray-500 text-sm">at 13:02, October 5, 2024</span></p>
                <p className="text-gray-700 mt-2">"This video gave me clarity on how to structure my portfolio! Sarah's insights on showcasing process over product were particularly helpful. Thank you!"</p>
                <div className="flex items-center text-gray-500 text-sm mt-2 space-x-4">
                  <span className="flex items-center"><i className="fas fa-thumbs-up mr-1"></i> 27</span>
                </div>
              </div>
            </div>
            {/* Comment 2 */}
            <div className="flex items-start">
              <img src="https://placehold.co/40x40" alt="User avatar" className="rounded-full mr-4" />
              <div>
                <p className="text-gray-800 font-semibold">Rina Tanaka <span className="text-gray-500 text-sm">at 4:15, October 6, 2024</span></p>
                <p className="text-gray-700 mt-2">"Good tips, but I'd love to see an example portfolio or a walkthrough of Sarah's work. The content was still very useful though!"</p>
                <div className="flex items-center text-gray-500 text-sm mt-2 space-x-4">
                  <span className="flex items-center"><i className="fas fa-thumbs-up mr-1"></i> 78</span>
                </div>
              </div>
            </div>
            {/* Add Comment */}
            <div className="flex items-start space-x-4">
              <img src="https://placehold.co/40x40" alt="User avatar" className="rounded-full" />
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Join the discussion and share your thoughts or experiences!"
                  className="w-full p-3 border border-gray-300 rounded"
                />
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Add Comment</button>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <aside>
          {/* Instructor Info */}
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <div className="flex items-center mb-4">
              <img src="https://placehold.co/60x60" alt="Sarah Lee" className="rounded-full mr-4" />
              <div>
                <h2 className="text-gray-800 font-bold">Sarah Lee</h2>
                <p className="text-gray-500">UI/UX Designer at Airbnb</p>
              </div>
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold mb-2">Achievements:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Designed the Airbnb homepage experience, improving user retention by 20%.</li>
                <li>Conducted UX workshops at international design conferences.</li>
                <li>Mentored over 50 aspiring designers through her online courses.</li>
              </ul>
            </div>
          </div>
          {/* Related Videos */}
          {/* Related Videos */}
<div className="bg-white p-6 rounded-lg shadow">
  <h3 className="text-gray-800 font-semibold mb-4">Related Videos</h3>
  <div className="space-y-6">
    {/* Video 1 */}
    <div className="flex flex-col space-y-2">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src="https://placehold.co/300x140"
          alt="Thumbnail"
          className="rounded-lg object-cover h-[140px] w-full"
          style={{ alignSelf: 'stretch' }}
        />
        <div className="absolute bottom-2 right-2 bg-white px-2 py-1 text-sm text-gray-700 rounded shadow">
          15 minutes
        </div>
      </div>
      {/* Title */}
      <p className="text-blue-600 font-bold text-lg">How to Create a Winning UX Case Study</p>
      {/* Avatar and Name */}
      <div className="flex items-center space-x-3">
        <img
          src="https://placehold.co/40x40"
          alt="Avatar"
          className="rounded-full"
        />
        <div>
          <p className="text-gray-800 font-semibold">James Patel</p>
          <p className="text-gray-500">Senior UX Researcher at Google</p>
        </div>
      </div>
    </div>
    {/* Video 2 */}
    <div className="flex flex-col space-y-2">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src="https://placehold.co/300x140"
          alt="Thumbnail"
          className="rounded-lg object-cover h-[140px] w-full"
          style={{ alignSelf: 'stretch' }}
        />
        <div className="absolute bottom-2 right-2 bg-white px-2 py-1 text-sm text-gray-700 rounded shadow">
          10 minutes
        </div>
      </div>
      {/* Title */}
      <p className="text-blue-600 font-bold text-lg">Building Your Personal Brand as a Designer</p>
      {/* Avatar and Name */}
      <div className="flex items-center space-x-3">
        <img
          src="https://placehold.co/40x40"
          alt="Avatar"
          className="rounded-full"
        />
        <div>
          <p className="text-gray-800 font-semibold">Ivan Lim</p>
          <p className="text-gray-500">Creative Lead at Spotify</p>
        </div>
      </div>
    </div>
  </div>
</div>
        </aside>
      </div>
    </div>
  );
};
export default LearningComent;