const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

user.init(
    {
        user_id: {
            type: DataTypes.SERIAL,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.VARCHAR(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.VARCHAR(255),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.VARCHAR(255),
            allowNull: false,
            validate: {
                len: [10],
            },
        },
    },
    {
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
            updatedUserData.password = await bcrypt.hash(
                updatedUserData.password, 10
            );
            return updatedUserData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelname: "users",
}
);

module.exports = users;