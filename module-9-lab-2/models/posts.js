const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect"); // Adjust the path as needed
const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts", // The name of the model, it will be used as the table name
    timestamps: true, // Add createdAt and updatedAt columns
  }
)

// Add any associations or methods if needed

module.exports = Post;

