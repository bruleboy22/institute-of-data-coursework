const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Books extends Model { }

Books.init({
    publisher:{type: DataTypes.STRING, allowNull: false, required: true},

    name:{type: DataTypes.STRING, allowNull: false, required: true},
        
    url:{type: DataTypes.STRING, allowNull: false, required: true}},

    {
    sequelize: sequelizeInstance, modelName: 'books',
    timestamps: true, freezeTableName: true
    }
)
            
module.exports = Books;