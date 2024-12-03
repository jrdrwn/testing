import React, { useEffect, useState } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([]); // Semua kursus dari API
    const [currentPage, setCurrentPage] = useState(1); // Halaman saat ini
    const coursesPerPage = 6; // Jumlah kursus per halaman

    useEffect(() => {
        fetch("https://localhost:5000/api/auth/courses") // Pastikan endpoint sesuai
            .then((res) => res.json())
            .then((data) => {
                setCourses(data.courses); // Simpan semua data
            })
            .catch((error) => console.error("Error fetching courses:", error));
    }, []);

    // Hitung indeks awal dan akhir berdasarkan halaman saat ini
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

    // Ganti halaman
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Fungsi untuk menangani tombol "Next" dan "Previous"
    const handleNext = () => {
        if (currentPage < Math.ceil(courses.length / coursesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-4">See Our Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentCourses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden"
                    >
                        <div className="relative">
                            <img
                                src={course.image_url}
                                alt={course.title}
                                className="w-full h-48 object-cover"
                            />
                            <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                {course.category}
                            </span>
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
                                Learn More <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border rounded-l disabled:opacity-50"
                >
                    <i className="fas fa-chevron-left"></i> Previous
                </button>
                {[...Array(Math.ceil(courses.length / coursesPerPage)).keys()].map((page) => (
                    <button
                        key={page + 1}
                        onClick={() => handlePageChange(page + 1)}
                        className={`px-3 py-1 border ${
                            currentPage === page + 1 ? "bg-blue-600 text-white" : ""
                        }`}
                    >
                        {page + 1}
                    </button>
                ))}
                <button
                    onClick={handleNext}
                    disabled={currentPage === Math.ceil(courses.length / coursesPerPage)}
                    className="px-3 py-1 border rounded-r disabled:opacity-50"
                >
                    Next <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Courses;
