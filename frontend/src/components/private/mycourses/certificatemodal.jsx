import React from 'react';
import { useNavigate } from 'react-router-dom';

const CertificateModal = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/dashboard/mycourses/completed');
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={handleClose}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-800">Congratulations on Completing the Course! 🎉</h1>
          <p className="text-gray-600 mt-2">You've successfully completed "Excel Essentials for Business Analysis" by Bank Rakyat Indonesia Academy.</p>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div className="bg-blue-600 text-white p-6 rounded-lg w-1/3">
            <h2 className="text-lg font-bold">Certificate of Completion</h2>
            <div className="mt-4">
              <i className="fas fa-award text-4xl"></i>
            </div>
          </div>
          <div className="w-2/3 pl-8">
            <h2 className="text-3xl font-bold text-blue-600">Deca Devin</h2>
            <p className="text-gray-600 mt-2">Is hereby awarded this certificate after successfully completing the <span className="text-blue-600">Excel Essentials for Business</span> course and passing the knowledge exam.</p>
            <div className="mt-4">
              <p className="text-gray-600">Presented by</p>
              <div className="flex items-center mt-2">
                <img src="https://placehold.co/50x50" alt="Bank Rakyat Indonesia Academy logo" className="w-12 h-12"/>
                <p className="ml-2 text-gray-800 font-bold">Bank Rakyat Indonesia Academy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <p className="text-gray-600">Certificate ID: nadjDSBFD343DS</p>
          </div>
          <div className="flex items-center">
            <div className="mr-8">
              <img src="https://placehold.co/100x100" alt="QR Code" className="w-20 h-20"/>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Indonesia, 12 November 2024</p>
              <p className="text-gray-800 font-bold mt-2">Waindini Nur Fitri</p>
              <p className="text-gray-600">CEO PINTURA</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="text-blue-600"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-blue-600"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-blue-600"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="text-blue-600"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-blue-600 flex items-center"><i className="fas fa-download mr-2"></i>Download PDF</a>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
