import fs from 'fs';
import dotenv from 'dotenv'; // Pastikan dotenv digunakan untuk memuat .env
import Sequelize from 'sequelize'; // Import Sequelize dari sequelize

dotenv.config(); // Muat variabel .env sebelum mengaksesnya

console.log('SSL_KEY_PATH:', process.env.SSL_KEY_PATH);
console.log('SSL_CERT_PATH:', process.env.SSL_CERT_PATH);

if (!process.env.SSL_KEY_PATH || !process.env.SSL_CERT_PATH) {
  throw new Error('SSL_KEY_PATH and SSL_CERT_PATH must be defined in the .env file');
}

// Periksa apakah file SSL tersedia
if (!fs.existsSync(process.env.SSL_KEY_PATH)) {
  throw new Error(`Key file not found at ${process.env.SSL_KEY_PATH}`);
}

if (!fs.existsSync(process.env.SSL_CERT_PATH)) {
  throw new Error(`Certificate file not found at ${process.env.SSL_CERT_PATH}`);
}

// Baca file SSL
export const sslOptions = {
  key: fs.readFileSync(process.env.SSL_KEY_PATH),
  cert: fs.readFileSync(process.env.SSL_CERT_PATH),
};

console.log('SSL options successfully loaded.');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_CONNECTION,
  logging: false, // Disable logging SQL queries
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));
