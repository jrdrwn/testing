import React from "react";

// Data anggota tim
const teamMembers = [
  { name: "Della Anissa Putri Widodo", role: "Product Manager", img: "/ourteam/della.png", social: ["facebook", "twitter", "instagram", "linkedin"] },
  { name: "Audry Maharani", role: "Quality Assurance", img: "ourteam/audry.png", social: ["facebook", "twitter", "instagram", "linkedin"] },
  { name: "Gilang Nur Hidayat", role: "UI/UX Designer", img: "ourteam/gilang.png", social: ["facebook", "twitter", "instagram", "linkedin"] },
  { name: "Ridhaka Gina Amalia", role: "UI/UX Designer", img: "ourteam/gina.png", social: ["facebook", "twitter", "instagram", "linkedin"] },
  { name: "Achmad Zainun Qurthubi", role: "Front-End Developer", img: "ourteam/zai.png", social: ["facebook", "twitter", "instagram", "linkedin"] },
  { name: "Desta Rizky Andhika", role: "Front-End Developer", img: "ourteam/desta.png", social: ["facebook", "twitter", "instagram", "linkedin"] },
  { name: "M. Denny Tri Lisandi", role: "Back-End Developer", img: "ourteam/denny.png", social: ["facebook", "twitter", "instagram", "linkedin"] },
  { name: "Faqih Rofiqi", role: "Back-End Developer", img: "ourteam/faqih.png", social: ["facebook", "twitter", "instagram", "linkedin"] },
  { name: "Calvin Alexander", role: "Data Scientist", img: "ourteam/calvin.png", social: ["facebook", "twitter", "instagram", "linkedin"] },
  { name: "M. Andrian Bhakti Maulana", role: "Data Scientist", img: "ourteam/andrian.png", social: ["facebook", "twitter", "instagram", "linkedin"] },
];

// Komponen untuk ikon sosial media
const SocialIcons = ({ social }) => (
  <div className="flex space-x-2 mt-2">
    {social.includes("facebook") && (
      <a href="#" className="text-blue-600">
        <i className="fab fa-facebook"></i>
      </a>
    )}
    {social.includes("twitter") && (
      <a href="#" className="text-blue-400">
        <i className="fab fa-twitter"></i>
      </a>
    )}
    {social.includes("instagram") && (
      <a href="#" className="text-pink-600">
        <i className="fab fa-instagram"></i>
      </a>
    )}
    {social.includes("linkedin") && (
      <a href="#" className="text-blue-700">
        <i className="fab fa-linkedin"></i>
      </a>
    )}
  </div>
);

// Komponen individu untuk setiap anggota tim
const TeamMember = ({ member }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
    <img src={member.img} alt={`Photo of ${member.name}`} className="w-24 h-24 rounded-full object-cover mb-4" />
    <h3 className="text-lg font-bold">{member.name}</h3>
    <p className="text-gray-600">{member.role}</p>
    <SocialIcons social={member.social} />
  </div>
);

// Komponen utama TeamSection
const TeamSection = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">Meet our talented team</h1>
      <p className="text-center text-gray-600 mb-8">Tremendous people behind the scenes</p>
      {/* Grid dengan 2 kolom */}
      <div className="grid grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
