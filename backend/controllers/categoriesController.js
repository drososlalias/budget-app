const { pool } = require("../db/db");

const categoriesController = async (req, res) => {
    const [rows, fields] = await pool.query("SELECT * FROM categories");
    if (rows.length > 0)
        return res.json({
            api_status: 1,
            results: rows,
        });
    return res.json({
        api_status: 0,
        msg: "No results were found",
    });
};

module.exports = { categoriesController };
