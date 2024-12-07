CREATE DATABASE IF NOT EXISTS pintura;

USE pintura;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Tabel untuk menyimpan peran pengguna (admin, instructor, dll)
CREATE TABLE userroles (
    role_id int NOT NULL AUTO_INCREMENT,
    role_name enum(
        'admin', -- Administrator sistem
        'instructor', -- Pengajar/guru
        'student', -- Pelajar/siswa
        'counselor', -- Konselor/pembimbing
        'mentor' -- Mentor/pembimbing
    ) NOT NULL,
    description text, -- Deskripsi detail tentang peran
    PRIMARY KEY (role_id)
);

-- Tabel untuk menyimpan data pengguna
CREATE TABLE users (
    user_id int NOT NULL AUTO_INCREMENT,
    google_id varchar(255) DEFAULT NULL, -- ID Google untuk login dengan Google
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL, -- Password terenkripsi
    role_id int DEFAULT NULL, -- Mengacu ke tabel userroles
    email_verified enum('0', '1') DEFAULT '0', -- Status verifikasi email
    email_verification_token varchar(6) DEFAULT NULL, -- Token untuk verifikasi email
    email_verification_token_expires datetime DEFAULT NULL, -- Waktu kedaluwarsa token verifikasi
    reset_password_token varchar(6) DEFAULT NULL, -- Token untuk reset password
    reset_password_token_expires datetime DEFAULT NULL, -- Waktu kedaluwarsa token reset
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL, -- Untuk soft delete
    PRIMARY KEY (user_id),
    UNIQUE KEY email (email),
    UNIQUE KEY google_id (google_id),
    FOREIGN KEY (role_id) REFERENCES userroles (role_id)
);

-- Tabel untuk menyimpan profil detail pengguna
CREATE TABLE userprofiles (
    profile_id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    username varchar(50) UNIQUE NOT NULL, -- Nama unik untuk pengguna
    image_url varchar(255) DEFAULT NULL, -- URL gambar profil
    date_of_birth date DEFAULT NULL,
    gender enum('Male', 'Female') DEFAULT NULL,
    phone_number varchar(20) DEFAULT NULL,
    allow_phone_notifications tinyint(1) DEFAULT '0', -- Izin notifikasi via telepon
    city varchar(100) DEFAULT NULL,
    education varchar(255) DEFAULT NULL, -- Riwayat pendidikan
    company varchar(255) DEFAULT NULL, -- Tempat kerja
    role varchar(100) DEFAULT NULL, -- Jabatan/posisi
    bio text, -- Biografi singkat
    linkedin_url VARCHAR(255) DEFAULT NULL, -- URL LinkedIn
    youtube_url VARCHAR(255) DEFAULT NULL, -- URL YouTube
    instagram_url VARCHAR(255) DEFAULT NULL, -- URL Instagram
    facebook_url VARCHAR(255) DEFAULT NULL, -- URL Facebook
    line_url VARCHAR(255) DEFAULT NULL, -- URL Line
    twitter_url VARCHAR(255) DEFAULT NULL, -- URL Twitter
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (profile_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

-- Tabel untuk kategori kursus
CREATE TABLE categoriescourses (
    category_id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL, -- Nama kategori
    description text, -- Deskripsi kategori
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL,
    PRIMARY KEY (category_id)
);

-- Tabel untuk kursus
CREATE TABLE courses (
    course_id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL, -- Judul kursus
    description text, -- Deskripsi kursus
    category_id int DEFAULT NULL, -- Mengacu ke kategori
    rating float DEFAULT '0', -- Rating kursus
    price decimal(10, 2) NOT NULL, -- Harga kursus
    image_url VARCHAR(255) DEFAULT NULL, -- URL gambar kursus
    institution varchar(100) DEFAULT NULL, -- Institusi penyelenggara
    is_trending enum('0', '1') DEFAULT '0', -- Apakah kursus trending
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL,
    PRIMARY KEY (course_id),
    FOREIGN KEY (category_id) REFERENCES categoriescourses (category_id)
);

-- Tabel untuk tugas
CREATE TABLE assignments (
    assignment_id int NOT NULL AUTO_INCREMENT,
    course_id int DEFAULT NULL, -- Mengacu ke kursus
    title varchar(255) DEFAULT NULL, -- Judul tugas
    description text, -- Deskripsi tugas
    due_date datetime DEFAULT NULL, -- Tenggat waktu
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (assignment_id),
    FOREIGN KEY (course_id) REFERENCES courses (course_id)
);

-- Tabel untuk pengumpulan tugas
CREATE TABLE assignmentsubmissions (
    submission_id int NOT NULL AUTO_INCREMENT,
    assignment_id int DEFAULT NULL, -- Mengacu ke tugas
    student_id int DEFAULT NULL, -- Mengacu ke pengguna (siswa)
    submission_content text, -- Konten/jawaban tugas
    status enum(
        'pending', -- Menunggu
        'grading', -- Sedang dinilai
        'graded', -- Sudah dinilai
        'late', -- Terlambat
        'resubmitted' -- Dikumpulkan ulang
    ) NOT NULL DEFAULT 'pending',
    grade decimal(5, 2) DEFAULT NULL, -- Nilai
    feedback text, -- Umpan balik
    submitted_at datetime DEFAULT CURRENT_TIMESTAMP,
    graded_at datetime DEFAULT NULL, -- Waktu penilaian
    PRIMARY KEY (submission_id),
    FOREIGN KEY (assignment_id) REFERENCES assignments (assignment_id),
    FOREIGN KEY (student_id) REFERENCES users (user_id)
);

-- Tabel untuk lencana/badge
CREATE TABLE badges (
    badge_id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL, -- Nama lencana
    description text, -- Deskripsi lencana
    image_url varchar(255) DEFAULT NULL, -- URL gambar lencana
    requirement text, -- Persyaratan mendapatkan lencana
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (badge_id)
);

-- Tabel untuk lencana yang diperoleh siswa
CREATE TABLE studentbadges (
    student_badge_id int NOT NULL AUTO_INCREMENT,
    student_id int DEFAULT NULL, -- Mengacu ke pengguna (siswa)
    badge_id int DEFAULT NULL, -- Mengacu ke lencana
    earned_at datetime DEFAULT CURRENT_TIMESTAMP, -- Waktu mendapatkan
    PRIMARY KEY (student_badge_id),
    FOREIGN KEY (student_id) REFERENCES users (user_id),
    FOREIGN KEY (badge_id) REFERENCES badges (badge_id)
);

-- Tabel untuk sesi konseling
CREATE TABLE counselingsessions (
    session_id int NOT NULL AUTO_INCREMENT,
    counselor_id int DEFAULT NULL, -- Mengacu ke pengguna (konselor)
    student_id int DEFAULT NULL, -- Mengacu ke pengguna (siswa)
    session_date datetime NOT NULL, -- Jadwal sesi
    status enum(
        'scheduled', -- Terjadwal
        'completed', -- Selesai
        'cancelled', -- Dibatalkan
        'no-show' -- Tidak hadir
    ) NOT NULL,
    notes text, -- Catatan sesi
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL,
    PRIMARY KEY (session_id),
    FOREIGN KEY (counselor_id) REFERENCES users (user_id),
    FOREIGN KEY (student_id) REFERENCES users (user_id)
);

-- Tabel untuk metode pembayaran
CREATE TABLE paymentmethods (
    payment_method_id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL, -- Nama metode pembayaran
    description text, -- Deskripsi metode
    is_active tinyint(1) DEFAULT '1', -- Status aktif
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (payment_method_id)
);

-- Tabel untuk pesanan kursus
CREATE TABLE courseorders (
    order_id int NOT NULL AUTO_INCREMENT,
    student_id int DEFAULT NULL, -- Mengacu ke pengguna (siswa)
    course_id int DEFAULT NULL, -- Mengacu ke kursus
    order_number varchar(50) NOT NULL, -- Nomor pesanan unik
    total_price decimal(10, 2) NOT NULL, -- Total harga
    payment_method_id int DEFAULT NULL, -- Mengacu ke metode pembayaran
    payment_status enum(
        'pending', -- Menunggu pembayaran
        'completed', -- Pembayaran selesai
        'failed', -- Pembayaran gagal
        'refunded', -- Dana dikembalikan
        'expired' -- Kedaluwarsa
    ) NOT NULL,
    payment_proof varchar(255) DEFAULT NULL, -- Bukti pembayaran
    payment_date datetime DEFAULT NULL, -- Tanggal pembayaran
    expired_at datetime DEFAULT NULL, -- Waktu kedaluwarsa
    notes text, -- Catatan pesanan
    order_date datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL,
    PRIMARY KEY (order_id),
    UNIQUE KEY order_number (order_number),
    FOREIGN KEY (student_id) REFERENCES users (user_id),
    FOREIGN KEY (course_id) REFERENCES courses (course_id),
    FOREIGN KEY (payment_method_id) REFERENCES paymentmethods (payment_method_id)
);

-- Tabel untuk pendaftaran kursus
CREATE TABLE enrollments (
    enrollment_id int NOT NULL AUTO_INCREMENT,
    student_id int DEFAULT NULL, -- Mengacu ke pengguna (siswa)
    course_id int DEFAULT NULL, -- Mengacu ke kursus
    progress float DEFAULT '0', -- Progres pembelajaran (0-100)
    completion_date datetime DEFAULT NULL, -- Tanggal penyelesaian
    enrolled_at datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (enrollment_id),
    FOREIGN KEY (student_id) REFERENCES users (user_id),
    FOREIGN KEY (course_id) REFERENCES courses (course_id)
);

-- Tabel untuk forum diskusi
CREATE TABLE forums (
    forum_id int NOT NULL AUTO_INCREMENT,
    course_id int DEFAULT NULL, -- Mengacu ke kursus
    title varchar(255) NOT NULL, -- Judul forum
    description text, -- Deskripsi forum
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL,
    PRIMARY KEY (forum_id),
    FOREIGN KEY (course_id) REFERENCES courses (course_id)
);

-- Tabel untuk peringkat
CREATE TABLE ranks (
    rank_id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL, -- Nama peringkat
    min_exp_required int NOT NULL, -- Minimal exp yang dibutuhkan
    description text, -- Deskripsi peringkat
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (rank_id)
);

-- Tabel untuk gamifikasi
CREATE TABLE gamifications (
    gamification_id int NOT NULL AUTO_INCREMENT,
    student_id int DEFAULT NULL, -- Mengacu ke pengguna (siswa)
    exp_points int DEFAULT '0', -- Poin pengalaman
    rank_id int DEFAULT NULL, -- Mengacu ke peringkat
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL,
    PRIMARY KEY (gamification_id),
    FOREIGN KEY (student_id) REFERENCES users (user_id),
    FOREIGN KEY (rank_id) REFERENCES ranks (rank_id)
);

-- Tabel untuk faktur
CREATE TABLE invoices (
    invoice_id int NOT NULL AUTO_INCREMENT,
    order_id int DEFAULT NULL, -- Mengacu ke pesanan
    invoice_number varchar(50) NOT NULL, -- Nomor faktur unik
    subtotal decimal(10, 2) NOT NULL, -- Subtotal
    discount decimal(10, 2) DEFAULT '0.00', -- Diskon
    tax decimal(10, 2) DEFAULT '0.00', -- Pajak
    total decimal(10, 2) NOT NULL, -- Total akhir
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (invoice_id),
    UNIQUE KEY invoice_number (invoice_number),
    FOREIGN KEY (order_id) REFERENCES courseorders (order_id)
);

-- Tabel untuk materi pembelajaran
CREATE TABLE materials (
    material_id int NOT NULL AUTO_INCREMENT,
    course_id int DEFAULT NULL, -- Mengacu ke kursus
    type enum('video', 'text', 'quiz') NOT NULL, -- Jenis materi
    content text, -- Konten materi
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL,
    PRIMARY KEY (material_id),
    FOREIGN KEY (course_id) REFERENCES courses (course_id)
);

-- Tabel untuk mentoring
CREATE TABLE mentorships (
    mentorship_id int NOT NULL AUTO_INCREMENT,
    mentor_id int DEFAULT NULL, -- Mengacu ke pengguna (mentor)
    mentee_id int DEFAULT NULL, -- Mengacu ke pengguna (mentee)
    status enum(
        'active', -- Aktif
        'pending', -- Menunggu
        'completed', -- Selesai
        'cancelled' -- Dibatalkan
    ) NOT NULL,
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL,
    PRIMARY KEY (mentorship_id),
    FOREIGN KEY (mentor_id) REFERENCES users (user_id),
    FOREIGN KEY (mentee_id) REFERENCES users (user_id)
);

-- Tabel untuk notifikasi
CREATE TABLE notifications (
    notification_id int NOT NULL AUTO_INCREMENT,
    student_id int DEFAULT NULL, -- Mengacu ke pengguna (siswa)
    title varchar(255) DEFAULT NULL, -- Judul notifikasi
    message text, -- Pesan notifikasi
    is_read tinyint(1) DEFAULT '0', -- Status dibaca
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (notification_id),
    FOREIGN KEY (student_id) REFERENCES users (user_id)
);

-- Tabel untuk posting di forum
CREATE TABLE posts (
    post_id int NOT NULL AUTO_INCREMENT,
    forum_id int DEFAULT NULL, -- Mengacu ke forum
    user_id int DEFAULT NULL, -- Mengacu ke pengguna
    content text NOT NULL, -- Konten posting
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL,
    PRIMARY KEY (post_id),
    FOREIGN KEY (forum_id) REFERENCES forums (forum_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

-- Tabel untuk pengembalian dana
CREATE TABLE refunds (
    refund_id int NOT NULL AUTO_INCREMENT,
    order_id int DEFAULT NULL, -- Mengacu ke pesanan
    reason text NOT NULL, -- Alasan pengembalian
    refund_amount decimal(10, 2) NOT NULL, -- Jumlah pengembalian
    status enum(
        'pending', -- Menunggu
        'approved', -- Disetujui
        'rejected', -- Ditolak
        'completed' -- Selesai
    ) NOT NULL,
    processed_at datetime DEFAULT NULL, -- Waktu diproses
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at datetime DEFAULT NULL,
    PRIMARY KEY (refund_id),
    FOREIGN KEY (order_id) REFERENCES courseorders (order_id)
);

CREATE TABLE `stripe_transactions` (
  id int NOT NULL,
  user_id int NOT NULL,
  name varchar(255) DEFAULT NULL,
  phone varchar(255) DEFAULT NULL,
  session_id varchar(255) NOT NULL,
  amount int NOT NULL,
  quantity int DEFAULT NULL,
  status varchar(255) NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP,
  deleted_at datetime DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);