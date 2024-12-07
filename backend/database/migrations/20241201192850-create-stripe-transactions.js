'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stripe_transactions', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // Mengacu pada nama tabel `users`
          key: 'user_id', // Mengacu pada `user_id` di tabel users
        },
        onDelete: 'CASCADE', // Menghapus transaksi ketika pengguna dihapus
      },
      name: {  // Menambahkan kolom 'name'
        type: Sequelize.STRING,  // Tipe data string
        allowNull: true,  // Kolom ini opsional
      },
      phone: {  // Menambahkan kolom 'phone'
        type: Sequelize.STRING,  // Tipe data string
        allowNull: true,  // Kolom ini opsional
      },
      session_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantity: {  // Menambahkan kolom 'quantity'
        type: Sequelize.INTEGER,  // Tipe data integer
        allowNull: true,  // Kolom ini opsional
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Hapus kolom tambahan jika rollback dilakukan
    await queryInterface.removeColumn('stripe_transactions', 'quantity');
    await queryInterface.removeColumn('stripe_transactions', 'phone');
    await queryInterface.removeColumn('stripe_transactions', 'name');
    
    // Hapus tabel jika rollback dilakukan
    await queryInterface.dropTable('stripe_transactions');
  }
};
