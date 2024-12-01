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

module.exports = {
    getAllCourses,
    };