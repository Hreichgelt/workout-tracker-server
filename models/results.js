const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class results extends Model {}

results.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false,
        },
        exercise_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false,
        },
        sets_recommended: {
            type: DataTypes.VARCHAR(255),
            allowNull: false,
            unique: false,
        },
        sets_completed: {
            type: DataTypes.VARCHAR(255),
            allowNull: true,
            unique: false,
        },
        reps_recommended: {
            type: DataTypes.VARCHAR(255),
            allowNull: false,
            unique: false,
        },
        reps_completed: {
            type: DataTypes.VARCHAR(255),
            allowNull: true,
            unique: false,
        },
 
    }
)