import React from 'react';

const Card = ({ icon, title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
    <div className="text-blue-500 text-4xl mb-4">
      <i className={icon}></i>
    </div>
    <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const CardsV9 = () => {
  const cardsData = [
    {
      icon: "fas fa-user",
      title: "Personalized Learning Experience",
      description: "Get personalized course recommendations for you.",
    },
    {
      icon: "fas fa-book",
      title: "Comprehensive Course Library",
      description: "Access courses on a variety of topics for your personal development.",
    },
    {
      icon: "fas fa-comments",
      title: "Engaging Community and Support",
      description: "Connect with an active community and get the support you need.",
    },
    {
      icon: "fas fa-heart",
      title: "Stress Management Support",
      description: "Find stress management guides and content to maintain mental health.",
    },
    {
      icon: "fas fa-play-circle",
      title: "Flexible Learning Options",
      description: "Learn anytime and anywhere with flexible materials.",
    },
  ];

  return (
    <section className="bg-white py-16 mt-8 font-poppins">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Unlock Your Best Learning Experience
        </h1>
        {/* Baris pertama dengan 3 card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.slice(0, 3).map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        {/* Baris kedua dengan 2 card di tengah */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-8">
          {cardsData.slice(3).map((card, index) => (
            <Card
              key={index + 3} // Menambahkan offset untuk memastikan key unik
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsV9;
