const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Pastikan folder 'uploads/' ada
const uploadPath = './uploads';
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Konfigurasi storage Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath); // Folder tempat menyimpan file
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nama file unik
  },
});

// Validasi jenis file
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png/;
  const isValid = allowedFileTypes.test(file.mimetype) && allowedFileTypes.test(path.extname(file.originalname).toLowerCase());

  if (isValid) {
    cb(null, true);
  } else {
    cb(new Error('Only .jpeg, .jpg, .png formats are allowed!'), false);
  }
};

// Middleware Multer
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Maksimal file 5 MB
});

module.exports = upload;
