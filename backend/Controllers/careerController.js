const { Article, VideoContent } = require('../database/models');

// Controller to get all video content
exports.getVideos = async (req, res) => {
  try {
    // Fetching all video content from database
    const videos = await VideoContent.findAll();

    // Handle case where no videos are found
    if (!videos || videos.length === 0) {
      return res.status(404).json({ message: "No video content found." });
    }

    // Format the response to match the expected schema
    const formattedVideos = videos.map(video => {
      let tags = [];
      try {
        // Try to parse the tags, if they're valid JSON
        tags = video.tags ? JSON.parse(video.tags) : [];
      } catch (e) {
        console.error(`Error parsing tags for video ${video.id}: ${e.message}`);
        // Fallback if parsing fails, e.g., splitting comma-separated tags
        tags = video.tags ? String(video.tags).split(',').map(tag => tag.trim()) : [];
      }

      return {
        id: video.id,
        title: video.title,
        description: video.description,
        url: video.url,
        tags, // Safely parsed tags (or fallback to split tags)
        created_at: video.created_at ? video.created_at.toISOString() : null,
        updated_at: video.updated_at ? video.updated_at.toISOString() : null
      };
    });

    return res.status(200).json(formattedVideos);
  } catch (err) {
    console.error('Error fetching video content:', err);
    return res.status(500).json({ message: "Error fetching video content.", error: err.message });
  }
};

// Controller to get all articles
exports.getArticles = async (req, res) => {
  try {
    // Fetching all articles from database
    const articles = await Article.findAll();

    // Handle case where no articles are found
    if (!articles || articles.length === 0) {
      return res.status(404).json({ message: "No articles found." });
    }

    // Format the response to match the expected schema
    const formattedArticles = articles.map(article => ({
      id: article.id,
      title: article.title,
      date: article.date ? article.date.toISOString() : null, // Standardize date format
      category: article.category,
      description: article.description,
      created_at: article.created_at ? article.created_at.toISOString() : null,
      updated_at: article.updated_at ? article.updated_at.toISOString() : null
    }));

    return res.status(200).json(formattedArticles);
  } catch (err) {
    console.error('Error fetching articles:', err);
    return res.status(500).json({ message: "Error fetching articles.", error: err.message });
  }
};
