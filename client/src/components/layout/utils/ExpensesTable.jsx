import moment from 'moment';

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
                                <td>{moment(expense.expense_date).format('LLL')}</td>
                                <td>{slug}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExpensesTable;
