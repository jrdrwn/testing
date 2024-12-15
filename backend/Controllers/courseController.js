const db = require('../database/models'); // Import db
const jwt = require('jsonwebtoken'); // Import jwt
const { Sequelize } = db;

const getAllCoursesTrend = async (req, res) => {
  try {
    // Menggunakan query SQL kustom
    const courses = await db.sequelize.query("SELECT * FROM courses where is_trending = '1'", {
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
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token.' });

    req.userId = decoded.userId; // Simpan userId di request untuk digunakan di controller
    next();
  });
};

// fungsi untuk mendapatkan nama kategori kursus
const getCategoryName = async (req, res) => {
  try {
    // Menggunakan query SQL kustom
    const categories = await db.sequelize.query(`
    SELECT
        c.course_id,
        c.title,
        c.description,
        c.rating,
        c.price,
        c.image_url,
        c.institution,
        c.is_trending,
        e.name AS category_name
    FROM courses c
    JOIN categoriescourses e ON c.category_id = e.category_id
      `, {
      type: Sequelize.QueryTypes.SELECT,
});
  
      // Mengecek apakah ada kategori
      if (!categories || categories.length === 0) {
        return res.status(404).json({ message: 'No categories found.' });
      }
  
      // Mengembalikan daftar kategori
      return res.status(200).json({
        message: 'Categories retrieved successfully.',
        categories,
      });
    } catch (error) {
      console.error('Error retrieving categories:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  };
// Fungsi untuk mendapatkan kursus yang diambil oleh pengguna
const getMyCourses = async (req, res) => {
  try {
    // Ambil userId dari JWT, bukan dari URL
    const userId = req.userId; // Ini diatur oleh middleware autentikasi

    const query = `
      SELECT 
      c.course_id,
        c.title AS course_title,
        c.description,
        c.rating,
        c.price,
        c.image_url,
        e.progress,
        e.enrolled_at
      FROM enrollments e
      JOIN courses c ON e.course_id = c.course_id
      WHERE e.student_id = :userId AND e.completion_date IS NULL
    `;

    const rows = await db.sequelize.query(query, {
      replacements: { userId },
      type: Sequelize.QueryTypes.SELECT,
    });

    // Log untuk debugging
    console.log('Data yang dikembalikan oleh query:', rows);
    console.log('Jumlah kursus yang ditemukan:', rows.length);

    // Berikan respons sukses dengan data kursus
    return res.status(200).json({
      message: 'Courses retrieved successfully.',
      courses: rows,
    });
  } catch (error) {
    console.error('Error retrieving courses:', error.message);
    return res.status(500).json({
      message: 'An error occurred while retrieving courses.',
      error: error.message,
    });
  }
};

const getMyCoursesComplete = async (req, res) => {
  // Mengonversi userId menjadi integer
  const userId = parseInt(req.params.userId, 10);

  const query = `
    SELECT 
      c.title AS course_title,
      c.description,
      c.rating,
      c.price,
      c.image_url,
      e.progress,
      e.enrolled_at
    FROM enrollments e
    JOIN courses c ON e.course_id = c.course_id
    WHERE e.student_id = :userId AND e.completion_date IS NOT NULL
  `;

  // Jalankan query dengan replacements
  const [rows] = await db.sequelize.query(query, {
    replacements: { userId },
    type: Sequelize.QueryTypes.SELECT,
  });

  // Log untuk debugging
  console.log('Data yang dikembalikan oleh query:', rows);
  console.log('Jumlah kursus yang ditemukan:', rows.length);

  // Jika tidak ada data ditemukan
  if (!rows || rows.length === 0) {
    return res.status(404).json({
      message: 'No courses found for this user.',
      courses: rows, // Konsistensi format respons
    });
  }

  // Berikan respons sukses dengan data kursus
  return res.status(200).json({
    message: 'Courses retrieved successfully.',
    courses: rows,
  });
};

module.exports = {
  getCategoryName, addCourse, getMyCourses, getMyCoursesComplete, authenticateToken, getAllCoursesTrend
    };