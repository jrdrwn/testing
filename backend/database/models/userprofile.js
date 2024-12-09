module.exports = (sequelize, DataTypes) => {
    const userprofiles = sequelize.define('userprofiles', {
      profile_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      username: DataTypes.STRING,
      image_url: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      gender: DataTypes.ENUM('Male', 'Female'),
      phone_number: DataTypes.STRING,
      city: DataTypes.STRING,
      education: DataTypes.STRING,
      company: DataTypes.STRING,
      role: DataTypes.STRING,
      bio: DataTypes.TEXT,
      linkedin_url: {
        type: DataTypes.STRING,
        allowNull: true},
      youtube_url: {
        type: DataTypes.STRING,
        allowNull: true},
      instagram_url: {
        type: DataTypes.STRING,
        allowNull: true},
      facebook_url: {
        type: DataTypes.STRING,
        allowNull: true},
      line_url: {
        type: DataTypes.STRING,
        allowNull: true},
      twitter_url: {
        type: DataTypes.STRING,
        allowNull: true},
      created_at: {
        type: DataTypes.DATE,
        allowNull: true},
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true},
    }, {
      timestamps: false,
      tableName: 'userprofiles',
    });
  
    return userprofiles;
  };
  