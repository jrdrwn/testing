import React from 'react'

const SimilarCourses = () => {
  const courses = [
    {
      title: "Python for Data Science",
      description: "Learn how to harness Python's power for data analysis, visualization, and machine learning in real-world applications.",
      category: "Data Science",
      university: "Bina Sarana Informatika University",
      imageUrl: "https://placehold.co/600x400?text=Python+for+Data+Science",
      universityLogo: "https://placehold.co/20x20?text=BSI"
    },
    {
      title: "Excel Essentials for Business Analysis",
      description: "Master essential Excel tools and techniques to streamline business analysis and improve decision-making.",
      category: "Business",
      university: "Shopee Indonesia",
      imageUrl: "https://placehold.co/600x400?text=Excel+Essentials",
      universityLogo: "https://placehold.co/20x20?text=Shopee"
    },
    {
      title: "SQL Fundamentals for Data Analysts",
      description: "Build a strong foundation in SQL to query, manipulate, and analyze databases effectively for actionable insights.",
      category: "Data Science",
      university: "Padjadjaran University",
      imageUrl: "https://placehold.co/600x400?text=SQL+Fundamentals",
      universityLogo: "https://placehold.co/20x20?text=Padjadjaran"
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Similar Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4">
            <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-lg font-bold text-blue-600">{course.title}</h2>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <p className="text-sm text-gray-500 mt-4">{course.category}</p>
              <div className="flex items-center mt-2">
                <img src={course.universityLogo} alt={course.university} className="w-5 h-5 mr-2" />
                <p className="text-sm text-gray-700">{course.university}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarCourses;
