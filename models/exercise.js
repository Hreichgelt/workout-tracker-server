const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class exercise extends Model {}

exercise.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lift: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reps: {
            type: DataTypes.VARCHAR(255),
            allowNull: false,
            unique: false,
        },
        sets: {
            type: DataTypes.VARCHAR(255),
            allowNull: false,
            unique: false,
        },
        your_reps: {
            type: DataTypes.VARCHAR(255),
            allowNull: true,
            unique: false,
        },
        your_sets: {
            type: DataTypes.VARCHAR(255),
            allowNull: true,
            unique: false,
        },
        

    }
)
