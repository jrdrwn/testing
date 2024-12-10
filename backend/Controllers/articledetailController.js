const { ArticleAuthor, Article } = require("../database/models"); // Import model

// Controller untuk mengambil semua data artikel author beserta artikel terkait
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await ArticleAuthor.findAll({
      include: [
        {
          model: Article, // Relasi ke tabel articles
          as: "article", // Alias relasi sesuai di model association
          attributes: ["id", "title", "date", "category", "description"], // Kolom artikel yang ingin diambil
        },
      ],
    });

    if (authors.length === 0) {
      return res.status(404).json({ message: "No authors found" });
    }

    res.status(200).json(authors);
  } catch (error) {
    console.error("Error fetching authors:", error);
    res.status(500).json({ message: "Failed to fetch authors", error: error.message });
  }
};

// Controller untuk mengambil satu artikel author berdasarkan ID beserta artikel terkait
exports.getAuthorById = async (req, res) => {
  const { id } = req.params;

  try {
    const author = await ArticleAuthor.findOne({
      where: { id }, // Cari data berdasarkan ID
      include: [
        {
          model: Article, // Relasi ke tabel articles
          as: "article", // Alias relasi sesuai di model association
          attributes: ["id", "title", "date", "category", "description"], // Kolom artikel yang ingin diambil
        },
      ],
    });

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.status(200).json(author);
  } catch (error) {
    console.error("Error fetching author:", error);
    res.status(500).json({ message: "Failed to fetch author", error: error.message });
  }
};
