const { createConnection } = require("mysql2/promise");
require("dotenv").config();

const { DB_NAME, USERNAME } = process.env;

(async () => {
    try {
        const statement = `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`;
        const db = await createConnection(`mysql://${USERNAME}@localhost:3306`);
        await db.execute(statement);
        console.log(`${DB_NAME} created`);
        process.exit();
    } catch (err) {
        console.log(err);
        process.exit();
    }
})();