'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true, // Tambahkan autoIncrement jika ingin auto generate
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Email harus unik
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null, // Sesuai dengan skema database
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), // Default ke waktu saat ini
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), // Update otomatis
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null, // Null by default
      },
    },
    {
      tableName: 'users', // Nama tabel sesuai database
      timestamps: false, // Matikan timestamps jika tidak menggunakan `createdAt` dan `updatedAt` default Sequelize
      paranoid: true, // Mengaktifkan soft delete menggunakan `deleted_at`
    }
  );

  // Hubungkan relasi model jika ada
  User.associate = (models) => {
    // Contoh relasi dengan tabel lain
    // User.belongsTo(models.Role, { foreignKey: 'role_id' });
  };

  return User;
};
