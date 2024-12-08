import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Helped me land my dream job",
            description: "The practical skills I learned through PINTURA helped me land my dream job in tech. The mentorship program was invaluable!",
            name: "Sandy Kristian Waluyo",
            title: "Computer Science Student",
            image: "/avatar/sandy.png",
        },
        {
            quote: "Navigate my academic journey",
            description: "The career guidance and mental wellness support really helped me navigate through my academic journey.",
            name: "Kevin Lius Bong",
            title: "Chemistry Student",
            image: "/avatar/kevin.png",
        },
    ];

    return (
        <div className="text-center mb-8 mt-8 px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">What our students say</h1>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="border border-blue-700 rounded-lg p-6 w-full md:max-w-sm text-left shadow-md"
                    >
                        <img
                            src={testimonial.image}
                            alt={`Photo of ${testimonial.name}`}
                            className="w-16 h-16 rounded-full mx-auto mb-4"
                        />
                        <p className="text-lg md:text-xl font-bold mb-2 text-center">"{testimonial.quote}"</p>
                        <p className="text-gray-600 mb-4 text-sm md:text-base">{testimonial.description}</p>
                        <div className="text-center">
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-gray-500 text-sm">{testimonial.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
