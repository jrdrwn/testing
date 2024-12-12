import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Logo from "../../../assets/logo/logo.png";

const LearningViewDetail = () => {
  const location = useLocation();
  const { course_id } = useParams(); // Ambil course_id dari URL jika menggunakan dynamic route
  const { courseTitle } = location.state || {};
  // Cek jika course_id tidak ditemukan
  if (!course_id) {
    return <div className="text-red-500">Course ID is missing in the URL.</div>;
  }
  console.log("Course ID:", location.state); // Menampilkan course_id di console

  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await fetch(
          `https://localhost:5000/api/auth/materials/${course_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Materials data:", data); // Menampilkan data materi di console
          // Menyesuaikan dengan struktur data yang baru
          setMaterials(data.material); // Menggunakan data.material yang berisi array
          setError(null);
        } else {
          const errorData = await response.json();
          console.error("Error data:", errorData); // Menampilkan error data di console
          throw new Error(errorData.message || "Failed to fetch materials.");
        }
      } catch (err) {
        console.error("Error fetching materials:", err.message); // Menampilkan pesan error di console
        setMaterials([]);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, [course_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow p-4 flex flex-col items-center">
        <div className="flex justify-center w-full mb-4">
          <img
            src={Logo}
            alt="PINTUR Logo"
            className="h-16 w-16 object-contain"
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="text-sm text-gray-500">
            Home &gt; My Courses &gt; {courseTitle} &gt; Module 1 &gt; Quiz
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Previous
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Next
            </a>
          </nav>
        </div>
      </header>
      <main className="flex flex-1">
        <aside className="w-1/4 bg-white p-4 shadow">
        {materials.length > 0 ? (
          materials.map((material, index) => (
            <div>
            <div
              key={index}
              className="bg-blue-600 text-white px-4 py-2 rounded mb-2"
            >
              {material.title}
            </div>

            </div>
          ))
        ) : (
          <div className="text-red-500">No materials found.</div>
        )}
          {/* <div className="max-w-md mx-auto">
            <div className="bg-blue-600 p-4 rounded-t-lg">
              <h2 className="text-lg font-semibold text-white">Introduction</h2>
            </div>
          </div> */}
        </aside>
      </main>
    </div>
  );
};

export default LearningViewDetail;
