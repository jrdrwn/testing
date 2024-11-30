import React from 'react'

const Faqs = () => {
  const faqs = [
    "How long do I have access to this course?",
    "Is there a certificate provided?",
    "Are there any prerequisites for this course?"
  ];

  function FAQItem({ question }) {
    return (
      <div className="border-b border-gray-200 py-4 flex justify-between items-center">
        <span className="text-lg text-gray-800">{question}</span>
        <i className="fas fa-chevron-down text-gray-500"></i>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">FAQs</h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq} />
      ))}
    </div>
  );
}

export default Faqs;
