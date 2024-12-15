import React, { useEffect, useState } from "react";

const Courses = () => {
    const [categories, setCategories] = useState([]); // Semua kursus dari API
    const [currentPage, setCurrentPage] = useState(1); // Halaman saat ini
    const coursesPerPage = 6; // Jumlah kursus per halaman

    useEffect(() => {
        fetch("https://localhost:5000/api/auth/courses") // Pastikan endpoint sesuai
            .then((res) => res.json())
            .then((data) => {
                setCategories(data.categories); // Simpan semua data
            })

    }, []);

    // Hitung indeks awal dan akhir berdasarkan halaman saat ini
    const indexOfLastCategories = currentPage * coursesPerPage;
    const indexOfFirstCategories = indexOfLastCategories - coursesPerPage;
    const currentCourses = categories.slice(indexOfFirstCategories, indexOfLastCategories);

    // Ganti halaman
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Fungsi untuk tombol "Next" dan "Previous"
    const handleNext = () => {
        if (currentPage < Math.ceil(categories.length / coursesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-6 lg:px-16">
                <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
                    See Our Courses
                </h1>
                {/* Grid courses */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentCourses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-200"
                        >
                            <div className="relative">
                                <img
                                    src={course.image_url}
                                    alt={course.title}
                                    className="w-full h-48 object-cover"
                                />
                                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                    {course.category_name}
                                </span>
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-blue-800 mb-2">
                                    {course.title}
                                </h2>
                                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                                    {course.description}
                                </p>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700">
                                    Learn More
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-8 space-x-2">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border rounded-l-md disabled:opacity-50 hover:bg-gray-200"
                    >
                        <i className="fas fa-chevron-left"></i> Previous
                    </button>
                    {[...Array(Math.ceil(categories.length / coursesPerPage)).keys()].map(
                        (page) => (
                            <button
                                key={page + 1}
                                onClick={() => handlePageChange(page + 1)}
                                className={`px-4 py-2 border ${
                                    currentPage === page + 1
                                        ? "bg-blue-600 text-white"
                                        : "hover:bg-gray-200"
                                }`}
                            >
                                {page + 1}
                            </button>
                        )
                    )}
                    <button
                        onClick={handleNext}
                        disabled={currentPage === Math.ceil(categories.length / coursesPerPage)}
                        className="px-4 py-2 border rounded-r-md disabled:opacity-50 hover:bg-gray-200"
                    >
                        Next <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Courses;
