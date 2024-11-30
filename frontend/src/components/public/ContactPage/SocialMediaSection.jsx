import React from 'react';

const SocialMediaSection = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-700">
      <div className="flex bg-blue-700 p-8 rounded-lg">
        <div className="w-1/2">
          <img
            src="https://storage.googleapis.com/a1aa/image/irhDrfllBcRrQiTMyeH82E2n2REtLpets0f4bp6wD7ZKK9NPB.jpg"
            alt="Person holding a smartphone with social media icons floating around"
            className="rounded-lg"
            width="600"
            height="400"
          />
        </div>
        <div className="w-1/2 text-white pl-8">
          <h1 className="text-4xl font-bold mb-4">Stay Connected</h1>
          <p className="text-lg mb-4">
            Follow us on social media to stay updated on new courses, features, and opportunities.
          </p>
          <p className="text-lg mb-4">Follow us on social media</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-instagram-square"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-youtube-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
