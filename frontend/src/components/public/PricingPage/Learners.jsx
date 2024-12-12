import React from 'react';

const testimonials = [
  {
    name: "Alice Johnson",
    title: "Data Analyst",
    image: "learners/alice.png",
    quote: "The courses on PINTURA helped me land my first job in data science! The lessons are easy to follow, and the mentors are incredibly supportive.",
    highlight: "helped me land my first job",
  },
  {
    name: "Rahul Mehta",
    title: "UX Designer",
    image: "learners/rahul.png",
    quote: "I was able to build a professional portfolio through the UI/UX Design course. The practical projects and feedback were exactly what I needed to grow my skills.",
    highlight: "build a professional portfolio",
  },
  {
    name: "Sophie Martin",
    title: "Marketing Specialist",
    image: "learners/sophie.png",
    quote: "The career guidance and resume templates made all the difference. I felt confident applying for jobs after completing the Digital Marketing course.",
    highlight: "I felt confident applying for jobs",
  },
  {
    name: "James Lee",
    title: "Data Scientist",
    image: "learners/james.png",
    quote: "PINTURA’s courses and community helped me switch careers smoothly. I went from finance to tech, thanks to the Data Science track!",
    highlight: "helped me switch careers smoothly",
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={testimonial.image}
        alt={`Photo of ${testimonial.name}`}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <p className="text-gray-700 mb-2">
          "{testimonial.quote.split(testimonial.highlight)[0]}
          <span className="font-bold">{testimonial.highlight}</span>
          {testimonial.quote.split(testimonial.highlight)[1]}"
        </p>
        <p className="font-bold text-gray-900">{testimonial.name}</p>
        <p className="text-gray-600">{testimonial.title}</p>
      </div>
    </div>
  );
}

const Learners = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-2">
        What Our Learners Say
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Read what our learners are saying about their experience with PINTURA:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Learners;
