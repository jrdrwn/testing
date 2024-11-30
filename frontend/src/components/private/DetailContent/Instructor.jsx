import React from 'react';

const Instructor = () => {
  return (
    <div className="max-w-4xl p-8">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Instructor</h1>
      <div className="border border-blue-500 rounded-lg p-4 flex items-center mb-6">
        <img
          src="https://placehold.co/100x100"
          alt="Portrait of Dr. Andi Prasetyo"
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">Dr. Andi Prasetyo, Ph.D.</h2>
          <p className="text-gray-600">
            Data Scientist and Lecturer at Universitas Indonesia with over 10 years of experience in data analytics and business intelligence.
          </p>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-500">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text-gray-600 ml-2">(4.0/5) based on 1,200 reviews</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-bold mb-2">Key Achievement</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Authored 15+ Research Papers: Published in leading international journals, focusing on predictive analytics, big data solutions, and AI innovations.
            </li>
            <li>
              Industry Collaborations: Partnered with Fortune 500 companies to implement data-driven strategies that increased operational efficiency by 30% on average.
            </li>
            <li>
              Award-Winning Educator: Recognized as "Best Lecturer in Data Analytics" by Universitas Indonesia for three consecutive years (2021–2023).
            </li>
            <li>
              Conference Speaker: Regular speaker at global data science conferences, including the World Data Summit and AI Innovations Expo.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Notable Projects</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Healthcare Predictive Modeling: Led a team in creating machine learning models to predict patient readmissions, reducing hospital costs by 25%.
            </li>
            <li>
              E-commerce Customer Segmentation: Developed algorithms for segmenting customer data, boosting targeted marketing ROI by 40%.
            </li>
            <li>
              Smart City Analytics: Designed a real-time traffic management system using big data analytics, implemented in Jakarta's smart city initiative.
            </li>
            <li>
              Financial Fraud Detection System: Built a predictive model to detect fraudulent transactions in banking systems, reducing financial fraud cases by 45%.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
