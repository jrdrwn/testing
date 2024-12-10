const jwt = require('jsonwebtoken');
const { userprofiles, sequelize } = require('../database/models'); // Impor model 'userprofiles'

// Fungsi untuk melengkapi profil pengguna
const completeProfile = async (req, res) => {
  const { username, image_url, date_of_birth, gender, phone_number, city, education, company, role, bio } = req.body; // Data dari request
  try {
    // Simpan data profil ke database menggunakan model 'userprofiles'
    const newProfile = await userprofiles.create({
      user_id: req.userId, // ID user dari token
      username,
      image_url,
      date_of_birth,
      gender,
      phone_number,
      city,
      education,
      company,
      role,
      bio,
    });

    // Berikan respons sukses
    res.status(201).json({ message: 'Profil berhasil dilengkapi.', profile: newProfile });
  } catch (error) {
    console.error('Terjadi kesalahan saat menyimpan profil:', error);
    res.status(500).json({ message: 'Gagal melengkapi profil.', error });
  }
};

// Middleware untuk memverifikasi token JWT
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Ambil token dari header
  if (!token) {
    return res.status(403).json({ message: 'Token tidak tersedia. Harap login terlebih dahulu.' });
  }

  try {
    // Verifikasi token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'yourSecretKey');
    req.userId = decoded.userId; // Simpan userId dari token ke request
    next(); // Lanjut ke fungsi berikutnya
  } catch (error) {
    console.error('Token tidak valid:', error);
    res.status(401).json({ message: 'Token tidak valid. Harap login ulang.' });
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.userId; // ID user dari token

    const [profile] = await sequelize.query(
      `SELECT username, image_url, date_of_birth, gender, phone_number, city, education, company, role, bio 
       FROM userprofiles 
       WHERE user_id = :userId`,
      {
        replacements: { userId }, // Menggunakan parameter untuk mencegah SQL Injection
        type: sequelize.QueryTypes.SELECT, // Jenis query SELECT
      }
    );

    if (!profile) {
      return res.status(404).json({ message: "Profil tidak ditemukan." });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Gagal mendapatkan profil.", error });
  }
};

const completeSocialMedia = async (req, res) => {
  const { linkedin_url, youtube_url, instagram_url, facebook_url, line_url, twitter_url } = req.body; // Data dari body request
  const userId = req.userId; // Ambil userId dari token atau session

  try {
    // Query untuk memperbarui data media sosial
    await sequelize.query(
      `UPDATE userprofiles
       SET linkedin_url = :linkedinUrl,
           youtube_url = :youtubeUrl,
           instagram_url = :instagramUrl,
           facebook_url = :facebookUrl,
           line_url = :lineUrl,
           twitter_url = :twitterUrl
       WHERE user_id = :userId`,
      {
        replacements: {
          linkedinUrl: linkedin_url || null, // Nilai dari body request, gunakan null jika tidak ada
          youtubeUrl: youtube_url || null,
          instagramUrl: instagram_url || null,
          facebookUrl: facebook_url || null,
          lineUrl: line_url || null,
          twitterUrl: twitter_url || null,
          userId: userId, // ID pengguna dari autentikasi
        },
        type: sequelize.QueryTypes.UPDATE,
      }
    );

    // Berikan respons sukses
    res.status(200).json({ message: "Social media updated successfully." });
  } catch (error) {
    console.error("Error updating social media:", error);
    res.status(500).json({ message: "Failed to update social media.", error });
  }
};

const getSocialMedia = async (req, res) => {
  try {
    const userId = req.userId; // ID user dari token

    const [profile] = await sequelize.query(
      `SELECT linkedin_url, youtube_url, instagram_url, facebook_url, line_url, twitter_url 
       FROM userprofiles 
       WHERE user_id = :userId`,
      {
        replacements: { userId }, // Menggunakan parameter untuk mencegah SQL Injection
        type: sequelize.QueryTypes.SELECT, // Jenis query SELECT
      }
    );

    if (!profile) {
      return res.status(404).json({ message: "Profil tidak ditemukan." });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Gagal mendapatkan profil.", error });
  }
};
const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // ID pengguna dari middleware autentikasi
    const { username, date_of_birth, ...otherFields } = req.body; // Data dari request body

    // Validasi data input
    if (!username || !date_of_birth) {
      return res.status(400).json({ message: 'Username dan tanggal lahir wajib diisi.' });
    }

    // Cari profil berdasarkan userId
    const profile = await UserProfile.findOne({ userId: userId });

    if (!profile) {
      return res.status(404).json({ message: 'Profil tidak ditemukan.' });
    }

    // Perbarui data profil
    profile.username = username;
    profile.date_of_birth = date_of_birth;

    // Tambahkan field lainnya jika ada
    for (const [key, value] of Object.entries(otherFields)) {
      profile[key] = value;
    }

    // Simpan perubahan ke database
    const updatedProfile = await profile.save();

    res.status(200).json({
      message: 'Profil berhasil diperbarui.',
      data: updatedProfile,
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui profil.' });
  }
};

// Ekspor fungsi agar bisa digunakan di file lain
module.exports = { completeProfile, authenticate, getProfile, completeSocialMedia, getSocialMedia, updateUserProfile };
