const express = require("express");
const router = express.Router();
const { getExpenses , addExpense } = require("../controllers/expensesController");
const { categoriesController } = require("../controllers/categoriesController");

router.get("/expenses", getExpenses);
router.post('/expenses', addExpense)
router.get("/categories", categoriesController);

module.exports = router;
