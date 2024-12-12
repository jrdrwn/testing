import React from 'react';

const EmailSection = () => {
  return (
    <div className="text-center pb-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">Get in Touch with Our Team!</h1>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
        <div className="bg-blue-800 text-white p-6 rounded-lg shadow-lg w-full sm:w-80">
          <div className="text-4xl mb-4">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">Sales</h2>
          <p className="mb-4">Interested in learning more about partnerships and services? Contact our sales team at</p>
          <a href="mailto:sales@pintura.com" className="font-semibold">sales@pintura.com <i className="fas fa-arrow-right"></i></a>
        </div>
        <div className="bg-white text-blue-800 p-6 rounded-lg shadow-lg w-full sm:w-80 border border-gray-200">
          <div className="text-4xl mb-4">
            <i className="fas fa-handshake"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">Partners</h2>
          <p className="mb-4">Looking to collaborate with PINTURA? Reach out to our partnerships team at</p>
          <a href="mailto:partners@pintura.com" className="font-semibold">partners@pintura.com <i className="fas fa-arrow-right"></i></a>
        </div>
        <div className="bg-white text-blue-800 p-6 rounded-lg shadow-lg w-full sm:w-80 border border-gray-200">
          <div className="text-4xl mb-4">
            <i className="fas fa-question-circle"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">Help & Support</h2>
          <p className="mb-4">Have questions or need assistance? Our support team is here to help at</p>
          <a href="mailto:help@pintura.com" className="font-semibold">help@pintura.com <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;