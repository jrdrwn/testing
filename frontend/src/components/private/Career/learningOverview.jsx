import { useEffect, useState } from 'react';
import { FaComment, FaExclamationCircle } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom'; // Import useParams to get the dynamic id from the URL
import Logo from '/logo/logo.png';

const LearningOverview = () => {
  const [videos, setVideos] = useState([]); // Videos state
  const [error, setError] = useState(null); // Track error state
  const [activeTab, setActiveTab] = useState('overview'); // Manage active tab (overview/comments)
  const { id } = useParams(); // Get the dynamic id from the URL
  const [videoId, setVideoId] = useState(null); // Add state for videoId

  const extractVideoId = (url) => {
    if (!url) return null;
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
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

  // Extract the first video object for rendering
  const video = videos.length > 0 ? videos[0] : null;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Link
        to="/dashboard/workshop"
        className="inline-flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] mb-6"
      >
        <i className="fas fa-arrow-left mr-2"></i>Workshop
      </Link>

      {/* Header */}
      <header className="relative py-6">
        <div className="absolute inset-0 flex justify-center">
          <img src={Logo} alt="PINTUR Logo" className="h-10 w-auto" />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Video */}
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            videoId && (
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
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-4 flex items-center space-x-2 ${
                activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
              }`}
            >
              <FaExclamationCircle className={activeTab === 'overview' ? 'text-blue-600' : 'text-gray-500'} />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('comments')}
              className={`py-2 px-4 flex items-center space-x-2 ${
                activeTab === 'comments' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
              }`}
            >
              <FaComment className={activeTab === 'comments' ? 'text-blue-600' : 'text-gray-500'} />
              <span>Comments</span>
            </button>
          </div>

          {/* Content Rendering Based on Active Tab */}
          {activeTab === 'overview' && video && (
            <>
              <h2 className="text-blue-700 text-2xl font-bold mb-2">{video.title || 'Title not available'}</h2>
              <p className="text-gray-700 mb-2">{video?.description || 'Description not available.'}</p>
              <ul className="text-gray-700">
                <li>{`Duration: ${video?.duration || 'Unknown duration'}`}</li>
              </ul>
            </>
          )}

          {activeTab === 'comments' && (
            <div className="space-y-6">
              {/* Add a sample comment */}
              <div className="flex items-start">
              <div>
                <p className="text-gray-800 font-semibold">Kevin Wijaya <span className="text-gray-500 text-sm">at 13:02, October 5, 2024</span></p>
                <p className="text-gray-700 mt-2">"This video gave me clarity on how to structure my portfolio! Sarah's insights on showcasing process over product were particularly helpful. Thank you!"</p>
                <div className="flex items-center text-gray-500 text-sm mt-2 space-x-4">
                  <span className="flex items-center"><i className="fas fa-thumbs-up mr-1"></i> 27</span>
                </div>
              </div>
            </div>
            
              <div className="flex items-start">
              <div>
                <p className="text-gray-800 font-semibold">Rina Tanaka <span className="text-gray-500 text-sm">at 4:15, October 6, 2024</span></p>
                <p className="text-gray-700 mt-2">"Good tips, but I'd love to see an example portfolio or a walkthrough of Sarah's work. The content was still very useful though!"</p>
                <div className="flex items-center text-gray-500 text-sm mt-2 space-x-4">
                  <span className="flex items-center"><i className="fas fa-thumbs-up mr-1"></i> 78</span>
                </div>
              </div>
            </div>

              {/* Add Comment Input */}
              <div className="flex items-start space-x-4">
                <img src="https://placehold.co/40x40" alt="User avatar" className="rounded-full" />
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Join the discussion and share your thoughts or experiences!"
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                  <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Add Comment</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {video && (
          <aside>
            <div className="bg-white p-6 rounded-lg shadow mb-8">
              <div className="flex items-center mb-4">
                <div>
                  <h2 className="text-gray-800 font-bold">Pintura</h2>
                  <p className="text-gray-500">{video.title || 'Title not available'}</p>
                </div>
              </div>
              <div>
                <h3 className="text-gray-800 font-semibold mb-2">Achievements:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>You can improve your skills</li>
                  <li>You can change the appearance of your study time</li>
                  <li>You can practice your activities with expert mentors</li>
                </ul>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default LearningOverview;
