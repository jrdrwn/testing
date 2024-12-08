const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const StripeTransaction = sequelize.define('StripeTransaction', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users', // Mengacu pada tabel `users`
        key: 'user_id',
      },
      onDelete: 'CASCADE',
    },
    name: {  // Menambahkan kolom 'name'
      type: DataTypes.STRING,  // Tipe data string
      allowNull: true,  // Kolom ini opsional
    },
    phone: {  // Menambahkan kolom 'phone'
      type: DataTypes.STRING,  // Misalnya tipe data string
      allowNull: true,  // Kolom ini opsional
    },
    session_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {  // Menambahkan kolom 'quantity'
      type: DataTypes.INTEGER,  // Misalnya tipe data integer
      allowNull: true,  // Kolom ini opsional
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
    
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'stripe_transactions',
    timestamps: false,
  });

  // Relasi dengan User (untuk mengakses nama pengguna)
  StripeTransaction.associate = function(models) {
    StripeTransaction.belongsTo(models.User, { 
      foreignKey: 'user_id', 
      targetKey: 'user_id',
      as: 'userInfo',  // Alias untuk mengakses data pengguna
    });
  };

  return StripeTransaction;
};
