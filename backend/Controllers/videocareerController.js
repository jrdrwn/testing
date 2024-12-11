const { VideoContent } = require("../database/models"); // Import models

/// Controller to get all video contents
exports.getAllVideos = async (req, res) => {
    try {
      // Fetch all video contents
      const videos = await VideoContent.findAll({
        attributes: ["id", "title", "url", "description", "duration"], // Select specific columns
      });
  
      if (videos.length === 0) {
        return res.status(404).json({ message: "No videos found" });
      }
  
      res.status(200).json(videos);
    } catch (error) {
      console.error("Error fetching videos:", error);
      res.status(500).json({ message: "Failed to fetch videos", error: error.message });
    }
  };

// Controller to get a single video content by ID
exports.getVideoById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const video = await VideoContent.findOne({
        where: { id }, // Fetch based on ID
        attributes: ["id", "title", "url", "description", "duration"], // Select specific columns
      });
  
      if (!video) {
        return res.status(404).json({ message: "Video not found" });
      }
  
      res.status(200).json(video);
    } catch (error) {
      console.error("Error fetching video:", error);
      res.status(500).json({ message: "Failed to fetch video", error: error.message });
    }
  };