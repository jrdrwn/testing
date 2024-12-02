import React from "react";
import LayoutWithSidebar from "./LayoutWithSidebar";

const SocialLinks = () => {
  const socialMedia = [
    { icon: 'fab fa-linkedin', color: 'bg-blue-700', link: 'https://linkedin.com/' },
    { icon: 'fab fa-youtube', color: 'bg-red-600', link: 'https://youtube.com/' },
    { icon: 'fab fa-instagram', color: 'bg-pink-500', link: 'https://instagram.com/' },
    { icon: 'fab fa-facebook', color: 'bg-blue-600', link: 'https://facebook.com/' },
    { icon: 'fab fa-line', color: 'bg-green-500', link: 'https://line.me/' },
    { icon: 'fab fa-x-twitter', color: 'bg-gray-700', link: 'https://twitter.com/' },
  ];

  return (
    <LayoutWithSidebar>
      <div className="flex justify-center min-h-screen">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
          <div className="flex items-center">
            <i className="fas fa-link text-blue-600 text-2xl mr-2"></i>
            <h1 className="text-blue-600 text-2xl font-bold">Social Links</h1>
          </div>
          <p className="text-gray-500 mt-2">
            Add your social media links here. Keep your connections up to date and easily share your achievements.
          </p>
          <div className="space-y-4 mt-4">
            {socialMedia.map((social, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-10 h-10 flex items-center justify-center rounded ${social.color}`}>
                  <i className={`${social.icon} text-white`}></i>
                </div>
                <input
                  type="text"
                  className="flex-1 p-2 border rounded"
                  value={social.link}
                  readOnly
                />
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Save change</button>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
};

export default SocialLinks;
