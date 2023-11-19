const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect"); // Adjust the path as needed
const sequelizeInstance = dbConnect.Sequelize;

class Likes extends Model {}

Likes.init(
    {
  userId: {
    type: DataTypes.INTEGER,
    ref: 'users',
    required: true,
  },
  postId: {
    type: DataTypes.INTEGER,
    ref: 'posts',
    required: true,
  },
    },
  {
    sequelize: sequelizeInstance,
    modelName: "likes", // The name of the model, it will be used as the table name
    timestamps: true, // Add createdAt and updatedAt columns
  }
)


module.exports = Likes;