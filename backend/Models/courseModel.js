// models/courseModel.js
const mysql = require('mysql2');

// Function to get all courses
const findAll = (callback) => {
  const query = 'SELECT * FROM courses'; // Query untuk mengambil semua data kursus
  db.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = {
  getAllCourses
};
