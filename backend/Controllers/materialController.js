const db =require('../database/models');
const jwt = require('jsonwebtoken');
const { Sequelize } = db;
const getMaterials = async (req, res) => {
  try {
    const materials = await db.sequelize.query("SELECT * FROM materials", {
      type: Sequelize.QueryTypes.SELECT,
    });
    if (!materials || materials.length === 0) {
      return res.status(404).json({ message: 'No materials found.' });
    }
    return res.status(200).json({
      message: 'Materials retrieved successfully.',
      materials,
    });
  } catch (error) {
    console.error('Error retrieving materials:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}

const getMaterialById = async (req, res) => {
  try {
    const { id } = req.params;
    const material = await db.sequelize.query("SELECT * FROM materials WHERE course_id = :id", {
      replacements: { id },
      type: Sequelize.QueryTypes.SELECT,
    });
    if (!material || material.length === 0) {
      return res.status(404).json({ message: 'Material not found.' });
    }
    return res.status(200).json({
      message: 'Material retrieved successfully.',
      material: material,
    });
  } catch (error) {
    console.error('Error retrieving material:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}
module.exports = {
  getMaterials, 
  getMaterialById,
};

// const { Material } = require('../database/models');  // Mengakses model Material

// // Mengambil semua materi
// exports.getMaterials = async (req, res) => {
//   try {
//     const materials = await Material.findAll({
//       attributes: ["material_id", "course_id", "title", "type", "content"], // Pilih kolom tertentu
//     });

//     if (!materials || materials.length === 0) {
//       return res.status(404).json({ message: 'No materials found.' });
//     }

//     return res.status(200).json({
//       message: 'Materials retrieved successfully.',
//       materials,
//     });
//   } catch (error) {
//     console.error('Error retrieving materials:', error);
//     return res.status(500).json({ message: 'Internal server error.' });
//   }
// }

// // Mengambil materi berdasarkan material_id
// exports.getMaterialById = async (req, res) => {
//   const { material_id } = req.params; // Mengambil material_id dari URL params
    
//   try {
//     // Gunakan findOne untuk mengambil satu data berdasarkan material_id
//     const material = await Material.findOne({
//       where: { material_id },  // Mencari materi berdasarkan material_id
//       attributes: ["material_id", "course_id", "title", "type", "content"], // Pilih kolom tertentu
//     });

//     if (!material) {
//       return res.status(404).json({ message: "Material not found" });
//     }

//     res.status(200).json({
//       message: "Material retrieved successfully.",
//       material,
//     });
//   } catch (error) {
//     console.error("Error fetching material:", error);
//     res.status(500).json({ message: "Failed to fetch material", error: error.message });
//   }
// }
