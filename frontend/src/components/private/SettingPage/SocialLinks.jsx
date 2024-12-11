import { useState, useEffect } from "react";
import LayoutWithSidebar from "./LayoutWithSidebar";

const SocialLinks = () => {
  const [socialMedia, setSocialMedia] = useState([
    { icon: "fab fa-linkedin", color: "bg-blue-700", key: "linkedin_url", link: "" },
    { icon: "fab fa-youtube", color: "bg-red-600", key: "youtube_url", link: "" },
    { icon: "fab fa-instagram", color: "bg-pink-500", key: "instagram_url", link: "" },
    { icon: "fab fa-facebook", color: "bg-blue-600", key: "facebook_url", link: "" },
    { icon: "fab fa-line", color: "bg-green-500", key: "line_url", link: "" },
    { icon: "fab fa-x-twitter", color: "bg-gray-700", key: "twitter_url", link: "" },
  ]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSocialMediaData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://localhost:5000/api/auth/socialmedia", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Sesuaikan token jika diperlukan
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch social media data");
      }
      const data = await response.json();
  
      setSocialMedia((prevSocialMedia) =>
        prevSocialMedia.map((item) => ({
          ...item,
          link: data[item.key] || "",
        }))
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSocialMediaData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <LayoutWithSidebar>
      <div className="flex justify-center min-h-screen">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
          <div className="flex items-center">
            <i className="fas fa-link text-blue-600 text-2xl mr-2"></i>
            <h1 className="text-blue-600 text-2xl font-bold">Social Links</h1>
          </div>
          <p className="text-gray-500 mt-2">
            Add your social media links here. Keep your connections up to date and easily share your achievements.
          </p>
          <div className="space-y-4 mt-4">
            {socialMedia.map((social, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-10 h-10 flex items-center justify-center rounded ${social.color}`}>
                  <i className={`${social.icon} text-white`}></i>
                </div>
                <input
                  type="text"
                  className="flex-1 p-2 border rounded"
                  value={social.link}
                  readOnly
                />
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
};

export default SocialLinks;
