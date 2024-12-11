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
        thumbnail_url: video.thumbnail_url,  // Include thumbnail_url in response
        date: video.date ? video.date.toISOString() : null,  // Format date if it exists
        duration: video.duration,
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
      author_name: article.author_name, // Author name
      author_image_url: article.author_image_url, // Author image URL
      date: article.date ? article.date.toISOString() : null, // Standardize date format
      category: article.category,
      description: article.description,
      content: article.content, // Article full text/content
      created_at: article.created_at ? article.created_at.toISOString() : null,
      updated_at: article.updated_at ? article.updated_at.toISOString() : null,
    }));
    

    return res.status(200).json(formattedArticles);
  } catch (err) {
    console.error('Error fetching articles:', err);
    return res.status(500).json({ message: "Error fetching articles.", error: err.message });
  }
};

// Controller for articlecontent
exports.getArticleContents = async (req, res) => {
  try {
    const articles = await Article.findAll({
      attributes: ['id', 'title', 'author_name', 'author_image_url', 'date', 'category', 'description'],
      order: [['date', 'DESC']], // Example: Fetch articles by the latest date
    });
    if (!articles || articles.length === 0) {
      return res.status(404).json({ message: 'No articles found' });
    }
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ message: 'Failed to fetch articles', error: error.message });
  }
};
