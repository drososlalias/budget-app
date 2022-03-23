function ExpensesTable({ expenses, slug }) {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses &&
                        expenses.map((expense) => (
                            <tr key={expense.id}>
                                <td>{expense.id}</td>
                                <td>{expense.description}</td>
                                <td>{expense.amount}</td>
                                <td>{expense.expense_date.split("T")[0]}</td>
                                <td>{slug}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExpensesTable;
