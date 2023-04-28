const sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.DB_URL) {
    sequelize = new sequelize(process.env.DB_URL);
} else {
    sequelize = new sequelize(
        process.env.DB_NAME,
        process.env.USERNAME,
        '',
        {
            host: "localhost",
            dialect: "mysql",
            port: 3306,
        }
    );
}

module.exports = sequelize;