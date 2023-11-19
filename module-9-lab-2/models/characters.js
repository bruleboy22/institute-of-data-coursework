const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Characters extends Model { }

Characters.init({
    gender:{type: DataTypes.STRING, allowNull: false, defaultValue: "Unknown"},

    name:{type: DataTypes.STRING, allowNull: false, required: true},
        
    url:{type: DataTypes.STRING, allowNull: false, required: true}},

    {
    sequelize: sequelizeInstance, modelName: 'characters',
    timestamps: true, freezeTableName: true
    }
)
            
module.exports = Characters;