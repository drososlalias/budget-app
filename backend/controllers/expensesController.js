const { pool } = require("../db/db");

const getExpenses = async (req, res) => {
    let query = "SELECT * FROM expenses";
    if (req.query?.cat) query += ` WHERE category_id=${req.query.cat}`;
    const [rows, fields] = await pool.query(query);
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

const addExpense = async (req, res) => {
    try {
        const { categoryId, description, amount } = req.body;
        if (!categoryId || !description || !amount) return res.json({ api_status: 0, msg: "failure", error: "invalid parameter types" });
        const query1 = `INSERT INTO expenses(description,amount,category_id) VALUES ('${description}' , ${amount} , ${categoryId})`;
        const query2 = `UPDATE categories SET total = total + ${amount} WHERE id=${categoryId}`;
        const [rows] = await Promise.all([pool.query(query1), pool.query(query2)]);
        const newExpenseId = rows[0].insertId;
        return res.json({
            api_status: 1,
            msg: "success",
            payload: {
                id: newExpenseId,
                description,
                amount,
                categoryId,
            },
        });
    } catch (err) {
        res.json({ api_status: 0, msg: "Internal Server Error" });
    }
};

module.exports = { getExpenses, addExpense };