import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
    const [videos, setVideos] = useState([]);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state
    const [error, setError] = useState(null); // Added error state for error handling

    const ITEMS_PER_PAGE = 3; // Jumlah item per halaman

// State untuk halaman saat ini
const [currentPage, setCurrentPage] = useState(1);

// Hitung total halaman
const totalPages = Math.ceil(videos.length / ITEMS_PER_PAGE);

// Potong data berdasarkan halaman saat ini
const paginatedVideos = videos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE, 
    currentPage * ITEMS_PER_PAGE
);

// Fungsi untuk mengubah halaman
const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
    }
};

    // Fetching data for VideoContents and Articles
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch VideoContents
                const videoResponse = await fetch('/api/auth/videoContents'); 
                if (!videoResponse.ok) {
                    throw new Error('Failed to fetch video contents');
                }
                const videoData = await videoResponse.json();
                setVideos(videoData);

                // Fetch Articles
                const articleResponse = await fetch('/api/articles');
                if (!articleResponse.ok) {
                    throw new Error('Failed to fetch articles');
                }
                const articleData = await articleResponse.json();
                setArticles(articleData);

                setLoading(false); // Stop loading when data is fetched
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); // Stop loading even if there's an error
                setError(error.message); // Set error message
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-8">
                <p className="text-lg text-gray-600">Loading content...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-8">
                <p className="text-lg text-red-600">Error: {error}</p>
            </div>
        );
    }

    return (
        <div>
            <main className="container mx-auto px-4 py-8">
                {/* Highlight Event Section */}
                <section className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-blue-600">Highlight Event</h2>
                    <p className="text-gray-600">Don't miss out on this exclusive opportunity to elevate your career and gain insights from top speakers — secure your spot now!</p>
                    <div className="mt-4 flex justify-center">
                        <img src="/career/highlightcareer.png" alt="Highlight Event" className="rounded-lg shadow-lg" />
                    </div>
                </section>

{/* Video Content Section */}
<section className="mb-8">
    <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-blue-800">Video Content</h3>
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full bg-white shadow-md">
            <span className="text-blue-600 font-medium">Category</span>
            <i className="fas fa-filter text-blue-600 ml-2"></i>
        </button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedVideos.length > 0 ? (
            paginatedVideos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col">
                    {/* Thumbnail */}
                    <img 
                        src={video.thumbnail_url} 
                        alt={video.title} 
                        className="rounded-lg mb-4 object-cover h-40 w-full" 
                    />
                    <Link to={`/dashboard/workshop/learningoverview/${video.id}`} className="hover:text-blue-600">
                            {video.title}
                        </Link>
                    <p className="text-gray-600 mb-2">{video.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                        {/* Speaker & Date Info */}
                        <div className="flex items-center">
                            <img 
                                src={video.thumbnail_url} 
                                alt={video.url} 
                                className="rounded-full mr-2 w-8 h-8 object-cover" 
                            />
                            <div>
                                <p className="text-gray-600">{video.date}</p>
                                <p className="text-gray-400 text-sm">{video.tags.join(', ')}</p>
                            </div>
                        </div>
                        {/* Duration */}
                        <span className="bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded-full ml-4">{video.duration}</span>
                    </div>
                </div>
            ))
        ) : (
            <p className="text-center text-gray-600">No video content available.</p>
        )}
    </div>

    {/* Pagination */}
    <div className="flex justify-center mt-6">
        <nav className="inline-flex space-x-2">
            <button 
                onClick={() => handlePageChange(currentPage - 1)} 
                className={`px-4 py-2 border border-gray-300 rounded-full ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
                <button 
                    key={i} 
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-4 py-2 border border-gray-300 rounded-full ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                    {i + 1}
                </button>
            ))}
            <button 
                onClick={() => handlePageChange(currentPage + 1)} 
                className={`px-4 py-2 border border-gray-300 rounded-full ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </nav>
    </div>
</section>




                {/* Latest Articles Section */}
                <section className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <h3 className="text-xl font-semibold text-gray-800 mr-2">Latest Articles</h3>
                            <Link to="/dashboard/workshop/articlecontent" className="text-blue-600">→</Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {articles.length > 0 ? (
                            articles.map((article) => (
                                <div key={article.id} className="bg-white rounded-lg shadow-lg p-4 flex">
                                    <img src={article.author_image_url} alt={article.title} className="w-[150px] h-[100px] rounded-lg object-cover mb-4" />
                                    <div className="ml-4">
                                        <div className="flex items-center text-gray-500 text-sm mb-2">
                                            <i className="far fa-calendar-alt mr-2"></i>
                                            <span>{article.date}</span>
                                            <span className="mx-2">—</span>
                                            <i className="fas fa-tag mr-2"></i>
                                            <span>{article.category}</span>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800">
                                            <Link to={`/dashboard/workshop/article/${article.id}`} className="hover:text-blue-600">{article.title}</Link>
                                        </h4>
                                        <p className="text-gray-600 mt-2">{article.description}</p>

                                        {/* Author Section */}
                                        <div className="mt-4">
                                            {/* Author Name */}
                                            <span className="text-gray-600 font-semibold">{article.author_name}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-600">No articles available.</p>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Career;
