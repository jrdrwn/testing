import React from 'react';

const StatsV1 = () => {
  return (
    <section className="bg-white py-16 mt-8 font-poppins">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-12">
          Numbers that showcase our success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-800">2,000+</p>
            <p className="text-lg font-semibold text-black mt-2">Active Courses</p>
            <p className="text-gray-600 mt-2">
              Diverse range of practical courses spanning tech, business, and professional skills, updated regularly with industry trends
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-800">97%</p>
            <p className="text-lg font-semibold text-black mt-2">Satisfaction Rate</p>
            <p className="text-gray-600 mt-2">
              Students consistently rate our platform highly for practical knowledge, mentorship quality, and career advancement support
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-800">34+</p>
            <p className="text-lg font-semibold text-black mt-2">Partners</p>
            <p className="text-gray-600 mt-2">
              Collaborations with leading universities and top companies ensuring curriculum relevance and job opportunities
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-800">100+</p>
            <p className="text-lg font-semibold text-black mt-2">Professional Mentors</p>
            <p className="text-gray-600 mt-2">
              Expert guidance from industry veterans across tech, business, and various professional fields
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsV1;
