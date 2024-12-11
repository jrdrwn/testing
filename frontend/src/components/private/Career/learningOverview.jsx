import { useEffect, useState } from 'react';
import { FaComment, FaCopy, FaExclamationCircle, FaFacebookF, FaGooglePlusG, FaHeart, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom'; // Import useParams to get the dynamic id from the URL
import Logo from '../../../assets/logo/logo.png';

const LearningOverview = () => {
  const [videos, setVideos] = useState([]); // Videos state
  const [error, setError] = useState(null);  // Track error state
  const { id } = useParams();  // Get the dynamic id from the URL
  const [videoId, setVideoId] = useState(null); // Add state for videoId

  const extractVideoId = (url) => {
    if (!url) return null;
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(youtubeRegex);
    return match ? match[1] : null;
};

useEffect(() => {
    if (id) {
        fetch(`/api/videos/${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.url) {
                    setVideos([data]);
                    const videoId = extractVideoId(data.url);
                    if (videoId) {
                        setVideoId(videoId);
                    } else {
                        setError('Invalid video URL');
                    }
                } else {
                    setError('No videos found for the provided ID');
                }
            })
            .catch((error) => {
                setError(`Error fetching videos: ${error.message}`);
            });
    } else {
        setError('ID is missing');
    }
}, [id]);


    return (
      <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <header className="relative py-6">
        {/* Logo di tengah */}
        <div className="absolute inset-0 flex justify-center">
          <img src={Logo} alt="PINTUR Logo" className="h-10 w-auto" />
        </div>
        {/* Navigasi di posisi semula */}
        <nav className="text-sm text-gray-500 mt-12">
          <a href="#" className="hover:underline">Home</a> &gt;{' '}
          <a href="#" className="hover:underline">Workshop</a> &gt;{' '}
          <a href="#" className="hover:underline">Portfolio Building</a> &gt;{' '}
          <span className="text-gray-700 font-semibold">5 Portfolio Tips to Land Your First UX Job</span>
        </nav>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Video and Overview Section */}
        <div className="lg:col-span-2">
          {/* Video */}
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            videos.length > 0 && videoId && (
              <div className="bg-black rounded-lg overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="400px"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Video Tutorial"
                />
              </div>
            )
          )}
          {/* Tab Navigation */}
          <div className="flex items-center justify-between border-b border-gray-300 mb-4">
            <button className="py-2 px-4 text-blue-600 border-b-2 border-blue-600 flex items-center space-x-2">
              <FaExclamationCircle className="text-blue-600" />
              <span>Overview</span>
            </button>
            <Link to="/dashboard/workshop/learningcomment" className="py-2 px-4 text-gray-500 flex items-center space-x-2">
              <FaComment className="text-gray-500" />
              <span>Comment <span className="text-gray-400">(27)</span></span>
            </Link>
          </div>
          {/* Overview Content */}
          <h2 className="text-blue-700 text-2xl font-bold mb-2">5 Portfolio Tips to Land Your First UX Job</h2>
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex space-x-2">
              <div className="rounded-full p-2 border border-gray-400 shadow-sm">
                <FaFacebookF className="text-gray-600" />
              </div>
              <div className="rounded-full p-2 border border-gray-400 shadow-sm">
                <FaTwitter className="text-gray-600" />
              </div>
              <div className="rounded-full p-2 border border-gray-400 shadow-sm">
                <FaLinkedinIn className="text-gray-600" />
              </div>
              <div className="rounded-full p-2 border border-gray-400 shadow-sm">
                <FaGooglePlusG className="text-gray-600" />
              </div>
              <div className="rounded-full p-2 border border-gray-400 shadow-sm">
                <FaWhatsapp className="text-gray-600" />
              </div>
              <div className="rounded-full p-2 border border-gray-400 shadow-sm">
                <FaCopy className="text-gray-600" />
              </div>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <FaHeart />
              <span>2.5k</span>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">About This Video</h3>
            <p className="text-gray-700 mb-2">Learn how to create an impressive portfolio that will grab the attention of recruiters. Sarah Lee, a seasoned UI/UX Designer at Airbnb, shares her top five actionable tips for building a portfolio that showcases your skills and creativity, even if you're just starting out in the industry.</p>
            <h3 className="text-lg font-semibold mb-2">Details</h3>
            <ul className="text-gray-700 mb-2">
              <li>Length: 12 minutes</li>
              <li>Language: English</li>
              <li>Difficulty Level: Beginner</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Key Learning Points</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Showcase your process, not just the finished product.</li>
              <li>Select only your best work—quality over quantity.</li>
              <li>Tailor your portfolio for each job application.</li>
              <li>Include case studies with metrics and outcomes.</li>
              <li>Ensure your portfolio is easy to navigate and visually appealing.</li>
            </ul>
          </div>
        </div>
        {/* Sidebar */}
    <aside>
      {/* Instructor Info */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="flex items-center mb-4">
          <img src="https://placehold.co/60x60" alt="Sarah Lee" className="rounded-full mr-4" />
          <div>
            <h2 className="text-gray-800 font-bold">Sarah Lee</h2>
            <p className="text-gray-500">UI/UX Designer at Airbnb</p>
          </div>
        </div>
        <div>
          <h3 className="text-gray-800 font-semibold mb-2">Achievements:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Designed the Airbnb homepage experience, improving user retention by 20%.</li>
            <li>Conducted UX workshops at international design conferences.</li>
            <li>Mentored over 50 aspiring designers through her online courses.</li>
          </ul>
        </div>
      </div>
      {/* Related Videos */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-800 font-semibold mb-4">Related Videos</h3>
        <div className="space-y-6">
          {/* Video 1 */}
          <div className="flex flex-col space-y-2">
            {/* Thumbnail */}
            <div className="relative">
              <img
                src="https://placehold.co/300x140"
                alt="Thumbnail"
                className="rounded-lg object-cover h-[140px] w-full"
                style={{ alignSelf: 'stretch' }}
              />
              <div className="absolute bottom-2 right-2 bg-white px-2 py-1 text-sm text-gray-700 rounded shadow">
                15 minutes
              </div>
            </div>
            {/* Title */}
            <p className="text-blue-600 font-bold text-lg">How to Create a Winning UX Case Study</p>
            {/* Avatar and Name */}
            <div className="flex items-center space-x-3">
              <img
                src="https://placehold.co/40x40"
                alt="Avatar"
                className="rounded-full"
              />
              <div>
                <p className="text-gray-800 font-semibold">James Patel</p>
                <p className="text-gray-500">Senior UX Researcher at Google</p>
              </div>
            </div>
          </div>
          {/* Video 2 */}
          <div className="flex flex-col space-y-2">
            {/* Thumbnail */}
            <div className="relative">
              <img
                src="https://placehold.co/300x140"
                alt="Thumbnail"
                className="rounded-lg object-cover h-[140px] w-full"
                style={{ alignSelf: 'stretch' }}
              />
              <div className="absolute bottom-2 right-2 bg-white px-2 py-1 text-sm text-gray-700 rounded shadow">
                10 minutes
              </div>
            </div>
            {/* Title */}
            <p className="text-blue-600 font-bold text-lg">Building Your Personal Brand as a Designer</p>
            {/* Avatar and Name */}
            <div className="flex items-center space-x-3">
              <img
                src="https://placehold.co/40x40"
                alt="Avatar"
                className="rounded-full"
              />
              <div>
                <p className="text-gray-800 font-semibold">Ivan Lim</p>
                <p className="text-gray-500">Creative Lead at Spotify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</div>
    );
};

export default LearningOverview;
