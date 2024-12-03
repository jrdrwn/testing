const db = require('../database/models'); // Import db
const { Sequelize } = db;

// Fungsi untuk mendapatkan semua daftar kursus
const getAllCourses = async (req, res) => {
  try {
    // Menggunakan query SQL kustom
    const courses = await db.sequelize.query("SELECT * FROM courses", {
      type: Sequelize.QueryTypes.SELECT, // Menentukan jenis query sebagai SELECT
    });

    // Mengecek apakah ada kursus
    if (!courses || courses.length === 0) {
      return res.status(404).json({ message: 'No courses found.' });
    }

    // Mengembalikan daftar kursus
    return res.status(200).json({
      message: 'Courses retrieved successfully.',
      courses,
    });
  } catch (error) {
    console.error('Error retrieving courses:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

const addCourse = async (req, res) => {
  try {
    const { title, description, category_id, price } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    // Query SQL mentah untuk menyisipkan data ke tabel courses
    const query = `
      INSERT INTO courses (title, description, category_id, price, image_url, created_at, updated_at)
      VALUES (:title, :description, :category_id, :price, :image_url, NOW(), NOW())
    `;

    // Eksekusi query dengan parameter pengganti
    await db.sequelize.query(query, {
      replacements: { title, description, category_id, price, image_url: imageUrl },
    });

    res.status(201).json({ message: 'Course added successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getAllCourses, addCourse
    };