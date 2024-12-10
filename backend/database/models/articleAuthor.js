module.exports = (sequelize, DataTypes) => {
    const ArticleAuthor = sequelize.define(
      "ArticleAuthor",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        author_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        author_image_url: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        article_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Articles", // Nama tabel `articles`
            key: "id",
          },
          onDelete: "CASCADE", // Jika artikel dihapus, data terkait dihapus juga
        },
        description_new: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: DataTypes.DATE,
          defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      {
        tableName: "article_authors", // Nama tabel di database
        timestamps: false, // Tidak menggunakan `createdAt` dan `updatedAt` bawaan Sequelize
      }
    );
  
    // Relasi dengan model Articles
    ArticleAuthor.associate = (models) => {
      ArticleAuthor.belongsTo(models.Article, {
        foreignKey: "article_id",
        as: "article", // Alias untuk relasi
      });
    };
  
    return ArticleAuthor;
  };
  