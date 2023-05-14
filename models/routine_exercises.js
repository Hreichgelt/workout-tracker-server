const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class routine_exercises extends Model {}

routine_exercises.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false,
        },
        exercise_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        lift_order: {
            type: VARCHAR(255),
            allowNull: false,
        }
    }
)