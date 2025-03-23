const {Sequelize, DataTypes} = require('sequelize');

const Pokemon = new Sequelize.define('Pokemon',{
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, allowNull: false, required: true},
        hp: {type: DataTypes.INTEGER, allowNull: false, required: true},
        cp: {type: DataTypes.INTEGER, allowNull: false, required: true},
        picture: {type: DataTypes.STRING, allowNull: false, required: true},
        types: {type: DataTypes.STRING, allowNull: false, required: true},
        created: {type: DataTypes.DATE, allowNull: false, required: true}
    },
    {
        freezeTableName: true,
        timestamps: true,
        createdAt: 'created',
        updatedAt: false,
    }
)
module.exports = Pokemon;