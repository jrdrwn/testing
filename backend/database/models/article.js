// models/article.js

module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define('Article', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author_name: {
        type: DataTypes.STRING,  // Add author's name
        allowNull: false,        // Make it required if needed
      },
      author_image_url: {
        type: DataTypes.STRING,  // Add URL to author's image
        allowNull: true,         // Allow null in case no image is provided
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      }
    }, {
      tableName: 'Articles',
      timestamps: false, // we are manually handling created_at and updated_at
    });
  
    return Article;
  };
  