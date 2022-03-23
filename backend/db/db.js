const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "drosos",
    password: "drosos",
    database: "budget-app",
});

module.exports = { pool: pool.promise() };
