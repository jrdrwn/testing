"use strict";

module.exports = (sequelize, DataTypes) => {
  const Material = sequelize.define(
    "Material",
    {
      material_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
    },
    {
      tableName: "materials",
      timestamps: true,
      paranoid: false,
    }
  );

  // Mendefinisikan relasi antara Material dan Course
  Material.associate = function (models) {
    // Material belongs to Course
    Material.belongsTo(models.Course, {
      foreignKey: "course_id",
      as: "course", // Nama alias untuk relasi
    });
  };

  return Material;
};
