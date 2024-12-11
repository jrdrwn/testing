// models/videoContent.js

module.exports = (sequelize, DataTypes) => {
  const VideoContent = sequelize.define('VideoContent', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    thumbnail_url: {
      type: DataTypes.STRING,
      allowNull: true, // Ini bisa null jika tidak ada thumbnail
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true, // Ini juga bisa null jika tidak ada tanggal khusus
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }, {
    tableName: 'VideoContents',
    timestamps: false, // we are manually handling created_at and updated_at
  });

  return VideoContent;
};
