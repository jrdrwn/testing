import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Helped me land my dream job",
            description: "The practical skills I learned through PINTURA helped me land my dream job in tech. The mentorship program was invaluable!",
            name: "Sandy Kristian Waluyo",
            title: "Computer Science Student",
            image: "https://placehold.co/50x50?text=User+1",
        },
        {
            quote: "Navigate my academic journey",
            description: "The career guidance and mental wellness support really helped me navigate through my academic journey.",
            name: "Kevin Lius Bong",
            title: "Chemistry Student",
            image: "https://placehold.co/50x50?text=User+2",
        },
    ];

    return (
        <div className="text-center mb-4 mt-4">
            <h1 className="text-3xl font-bold text-blue-700 mb-8">What our students say</h1>
            <div className="flex items-center justify-center space-x-4">
                <button className="text-blue-700 text-2xl">
                    <i className="fas fa-chevron-left"></i>
                </button>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="border border-blue-700 rounded-lg p-6 max-w-sm">
                        <img
                            src={testimonial.image}
                            alt={`Photo of ${testimonial.name}`}
                            className="w-12 h-12 rounded-full mx-auto mb-4"
                        />
                        <p className="text-lg font-bold mb-2">"{testimonial.quote}"</p>
                        <p className="text-gray-600 mb-4">{testimonial.description}</p>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-gray-500">{testimonial.title}</p>
                    </div>
                ))}
                <button className="text-blue-700 text-2xl">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
