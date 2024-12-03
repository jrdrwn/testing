import React, { useEffect,useState } from "react";

// const courses = [
//     {
//         title: "UI/UX Design Fundamentals",
//         description: "Build a strong foundation in UI/UX design and create user-centered digital products.",
//         category: "Design",
//         institution: "Tokopedia Design Academy",
//         image: "https://placehold.co/600x400?text=UI/UX+Design+Fundamentals",
//         institutionLogo: "https://placehold.co/20x20?text=Logo"
//     },
//     {
//         title: "Excel for Business Analysis",
//         description: "Enhance your business analysis skills using advanced Excel techniques.",
//         category: "Office Productivity",
//         institution: "Bank Rakyat Indonesia Academy",
//         image: "https://placehold.co/600x400?text=Excel+for+Business+Analysis",
//         institutionLogo: "https://placehold.co/20x20?text=Logo"
//     },
//     {
//         title: "Video Editing with Adobe Premiere Pro",
//         description: "Learn the essentials of video editing with Adobe Premiere Pro for professional content creation.",
//         category: "Video",
//         institution: "Multimedia Nusantara University",
//         image: "https://placehold.co/600x400?text=Video+Editing+with+Adobe+Premiere+Pro",
//         institutionLogo: "https://placehold.co/20x20?text=Logo"
//     },
//     {
//         title: "Java Programming for Beginners",
//         description: "Start your journey into programming by learning the basics of Java development.",
//         category: "Development",
//         institution: "Bandung Institute of Technology",
//         image: "https://placehold.co/600x400?text=Java+Programming+for+Beginners",
//         institutionLogo: "https://placehold.co/20x20?text=Logo"
//     },
//     {
//         title: "Introduction to Health and Fitness Coaching",
//         description: "Gain essential knowledge on fitness training and wellness coaching techniques.",
//         category: "Health & Fitness",
//         institution: "Jakarta State University",
//         image: "https://placehold.co/600x400?text=Introduction+to+Health+and+Fitness+Coaching",
//         institutionLogo: "https://placehold.co/20x20?text=Logo"
//     },
//     {
//         title: "Effective Public Speaking",
//         description: "Improve your public speaking skills with techniques for impactful presentations.",
//         category: "Lifestyle",
//         institution: "Airlangga University",
//         image: "https://placehold.co/600x400?text=Effective+Public+Speaking",
//         institutionLogo: "https://placehold.co/20x20?text=Logo"
//     },
//     {
//         title: "Data Analysis with Python",
//         description: "Get hands-on with Python to clean, analyze, and visualize data for real-world insights.",
//         category: "IT & Software",
//         institution: "Telkom University",
//         image: "https://placehold.co/600x400?text=Data+Analysis+with+Python",
//         institutionLogo: "https://placehold.co/20x20?text=Logo"
//     },
//     {
//         title: "Business Strategy for Startups",
//         description: "Explore frameworks and models to create a sustainable business strategy for new ventures.",
//         category: "Business",
//         institution: "Gadjah Mada University",
//         image: "https://placehold.co/600x400?text=Business+Strategy+for+Startups",
//         institutionLogo: "https://placehold.co/20x20?text=Logo"
//     },
//     {
//         title: "Adobe Photoshop Essentials for Beginners",
//         description: "Master the basics of Adobe Photoshop for photo editing and digital art creation.",
//         category: "Design",
//         institution: "Bina Nusantara University",
//         image: "https://placehold.co/600x400?text=Adobe+Photoshop+Essentials+for+Beginners",
//         institutionLogo: "https://placehold.co/20x20?text=Logo"
//     },
//     {
//         title: "SQL for Data Science",
//         description: "Learn SQL fundamentals to query, analyze, and process data efficiently.",
//         category: "IT & Software",
//         institution: "Bina Sarana Informatika University",
//         image: "https://placehold.co/600x400?text=SQL+for+Data+Science",
//         institutionLogo: "https://placehold.co/20x20?text=Logo"
//     },
//     {
//         title: "Branding Essentials for Modern Business",
//         description: "Discover essential branding techniques to elevate your business's identity.",
//         category: "Marketing",
//         institution: "Shopee Indonesia",
//         image: "https://placehold.co/600x400?text=Branding+Essentials+for+Modern+Business",
//         institutionLogo: "https://placehold.co/20x20?text=Logo"
//     },
//     {
//         title: "Basic Photography Skills",
//         description: "Understand core photography concepts to capture stunning visuals with any camera.",
//         category: "Photography",
//         institution: "Padjadjaran University",
//         image: "https://placehold.co/600x400?text=Basic+Photography+Skills",
//         institutionLogo: "https://placehold.co/20x20?text=Logo"
//     }
// ];

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https:localhost:5000/api/auth/courses')
            .then(response => response.json())
            .then(data => setCourses(data.courses))
            .catch(error => console.error(error));
    }, []);

  return (
    <div className="p-8 min-h-screen mb-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">All</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">Development</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">Business</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">Finance</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">IT & Software</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">Office Productivity</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={course.image_url}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-blue-700">
                {course.title}
              </h2>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <div className="flex items-center mt-4">
                <span className="text-sm text-gray-500">{"$ "+ course.price}</span>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src={"https://placehold.co/20x20?text=Logo"}
                  alt={course.institution}
                  className="w-5 h-5 mr-2"
                />
                <span className="text-sm text-gray-700">{"company_"+[course.course_id]+".id"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <button className="px-4 py-2 bg-white text-gray-700 rounded">
          Previous
        </button>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">1</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">2</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">3</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">4</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">5</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">6</button>
        </div>
        <button className="px-4 py-2 bg-white text-gray-700 rounded">Next</button>
      </div>
    </div>
  );
};

export default Courses;
