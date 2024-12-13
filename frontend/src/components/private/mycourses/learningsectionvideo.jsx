import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Logo from "/logo/logo.png";
import { useNavigate } from "react-router-dom";

const LearningSectionVideo = () => {
  const location = useLocation();
  const { course_id } = useParams(); // Ambil course_id dari URL jika menggunakan dynamic route
  const course = location.state?.course; // Akses objek course dari state

  const navigate = useNavigate();
  // Cek jika course_id tidak ditemukan

  if (!course_id) {
    return <div className="text-red-500">Course ID is missing in the URL.</div>;
  }

  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil YouTube video ID dari URL
  const extractMaterialId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S+?v=|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

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

  const handleCommentClick = () => {
    navigate("/dashboard/mycourses/learningsectioncoment");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
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
            Home &gt; My Courses &gt; {course?.course_title} &gt; Module 1 &gt;
            Lesson 1.2
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

      <main className="flex flex-1 p-4 gap-5">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white p-4 rounded-lg shadow">
          <div className="max-w-md mx-auto">
            <div className="bg-blue-600 p-4 rounded-t-lg">
              <h2 className="text-lg font-semibold text-white">Introduction</h2>
            </div>

            {[
              "Module 1",
              "Module 2",
              "Module 3",
              "Module 4",
              "Module 5",
              "Module 6",
            ].map((module, index) => (
              <div key={index}>
                <div className="p-4 border-b border-gray-300 mb-2 shadow">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-black">
                      {module}
                    </h3>
                  </div>
                  <p className="text-sm text-black">{module}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content: Video Section */}
        <div className="flex flex-col w-1/2 bg-white p-4 rounded-lg shadow mb-4 gap-5">
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            materials.length > 0 &&
            materials.map((material, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden mb-4"
              >
                {/* Display Video */}
                {material.type === "video" && material.content && (
                  <div className="bg-black rounded-lg overflow-hidden mb-4">
                    <iframe
                      width="100%"
                      height="400px"
                      src={`https://www.youtube.com/embed/${extractMaterialId(
                        material.content
                      )}`} // Menyisipkan ID YouTube ke dalam iframe
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={material.title}
                    />
                  </div>
                )}

                {/* Display Document or PDF */}
                {material.type === "document" && material.content && (
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <a
                      href={material.content}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {material.title}
                    </a>
                  </div>
                )}
              </div>
            ))
          )}

          {/* Comment Section */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-comment" onClick={handleCommentClick}></i>
              <span>Comment 27</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-download"></i>
              <span>Downloads 7</span>
            </div>
          </div>

          {/* Download Lesson Slides */}
          <div className="flex items-center space-x-2 text-blue-600">
            <i className="fas fa-download"></i>
            <a href="#" className="text-blue-600 hover:underline">
              Lesson Slides (2.9 MB)
            </a>
            <span className="text-gray-600">PDF</span>
          </div>
        </div>

        {/* Sidebar: Course Overview */}
        <aside className="w-1/4 bg-white p-4 rounded-lg shadow">
          <div className="mb-4">
            <div className="text-lg font-semibold">Overview</div>
            <div className="text-sm text-gray-500">
              Course by Dr. Andi Prasetyo, Ph.D. in collaboration with
              Universitas Indonesia
            </div>
            <div className="text-lg font-semibold text-blue-800 mt-2">
              Data Analysis Fundamentals
            </div>
            <div className="flex space-x-2 mt-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                Data Analysis
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                Statistics
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                Excel
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                SQL
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                Power BI
              </span>
            </div>
            <div className="text-sm text-gray-500 mt-4">
              In this course, you will master the foundational skills of data
              analysis with practical applications in real-world scenarios.
              Learn how to collect, clean, and manipulate data effectively,
              create compelling data visualizations, and apply basic statistical
              techniques to drive data-driven decision-making. This course is
              suitable for beginners and those looking to strengthen their
              analytical skills.
            </div>
            <div className="text-lg font-semibold mt-4">What You'll Learn:</div>
            <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
              <li>Principles of data collection and cleaning</li>
              <li>
                Hands-on experience with Excel and SQL for data manipulation
              </li>
              <li>Visualizing data with Power BI for impactful storytelling</li>
              <li>Basic statistical analysis for interpreting data patterns</li>
              <li>Real-world case studies to build practical expertise</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default LearningSectionVideo;
