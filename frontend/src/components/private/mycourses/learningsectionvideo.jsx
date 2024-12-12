import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Logo from '../../../assets/logo/logo.png'; // Ganti dengan logo yang sesuai

const LearningSectionVideo = () => {
  const { material_id } = useParams(); // Ambil courseId dari URL params
  const [materials, setMaterials] = useState([]); // State untuk menyimpan materi
  const [error, setError] = useState(null); // State untuk error handling
  const navigate = useNavigate();

  // Fungsi untuk mengambil YouTube video ID dari URL
  const extractMaterialId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S+?v=|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Mengambil materi berdasarkan course_id
  useEffect(() => {
    if (material_id) {
      // Fetch material berdasarkan material_id
      fetch(`/api/materials/${material_id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Log data untuk pengecekan
          if (data.material) {
            setMaterials([data.material]); // Menyimpan satu materi
          } else {
            setError('Invalid material');
          }
        })
        .catch((error) => {
          setError(`Error fetching materials: ${error.message}`);
        });
    } else {
      setError('Material ID is missing');
    }
  }, [material_id]);
  

  const handleCommentClick = () => {
    navigate('/dashboard/mycourses/learningsectioncoment');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex flex-col items-center">
        <div className="flex justify-center w-full mb-4">
          <img src={Logo} alt="PINTUR Logo" className="h-16 w-16 object-contain" />
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="text-sm text-gray-500">
            Home &gt; My Courses &gt; Data Analysis Fundamentals &gt; Module 1 &gt; Lesson 1.2
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">Previous</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Next</a>
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

            {["Module 1", "Module 2", "Module 3", "Module 4", "Module 5", "Module 6"].map((module, index) => (
              <div key={index}>
                <div className="p-4 border-b border-gray-300 mb-2 shadow">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-black">{module}</h3>
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
            materials.length > 0 && materials.map((material, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden mb-4">
                {/* Display Video */}
                {material.type === "video" && material.content && (
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${extractMaterialId(material.content)}`} // Menyisipkan ID YouTube ke dalam iframe
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
                    <a href={material.content} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
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
            <a href="#" className="text-blue-600 hover:underline">Lesson Slides (2.9 MB)</a>
            <span className="text-gray-600">PDF</span>
          </div>
        </div>

        {/* Sidebar: Course Overview */}
        <aside className="w-1/4 bg-white p-4 rounded-lg shadow">
          <div className="mb-4">
            <div className="text-lg font-semibold">Overview</div>
            <div className="text-sm text-gray-500">Course by Dr. Andi Prasetyo, Ph.D. in collaboration with Universitas Indonesia</div>
            <div className="text-lg font-semibold text-blue-800 mt-2">Data Analysis Fundamentals</div>
            <div className="flex space-x-2 mt-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Data Analysis</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Statistics</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Excel</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">SQL</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Power BI</span>
            </div>
            <div className="text-sm text-gray-500 mt-4">
              In this course, you will master the foundational skills of data analysis with practical applications in real-world scenarios. Learn how to collect, clean, and manipulate data effectively, create compelling data visualizations, and apply basic statistical techniques to drive data-driven decision-making. This course is suitable for beginners and those looking to strengthen their analytical skills.
            </div>
            <div className="text-lg font-semibold mt-4">What You'll Learn:</div>
            <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
              <li>Principles of data collection and cleaning</li>
              <li>Hands-on experience with Excel and SQL for data manipulation</li>
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
