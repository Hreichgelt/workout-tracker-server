const sequelize = require("sequelize");
require("dotenv").config();

let sequelizeInstance;

if (process.env.DB_URL) {
    // use the DB_URL if it is available
    sequelizeInstance = new sequelize(process.env.DB_URL);
} else {
    // use the individual env variables to create connection
    sequelizeInstance = new sequelize(
        process.env.DB_NAME,
        process.env.USERNAME,
        '',
        {
            host: "localhost",
            dialect: "mysql",
            port: 3306,
            logging: true,
            pool: {
                max: 10,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }
    );
}

sequelizeInstance
    .authenticate()
    .then(() => {
            console.log("Connection has been established.");
    })
    .catch((err) => {
        console.error("Unable to connect to the DB", err);
    });

module.exports = sequelize;