import { useParams } from "react-router-dom";
import { useContext } from "react";
import MainContext from "../context/main-context/MainContext";
import ExpensesTable from "../components/layout/utils/ExpensesTable";

function Expenses() {
    const { slug } = useParams();

    const catId = JSON.parse(localStorage.getItem('categories')).filter(cat => cat.slug === slug).pop().id
    
    const { categories, loading, expenses } = useContext(MainContext);
    const expensesPerCategory = expenses.filter(exp => exp.category_id === catId)
    
    if (loading) return <div>Loading...</div>;

    if (categories && expensesPerCategory.length < 1)
        return <h3 className="text-center text-2xl text-red-300">No Expenses for the specific category where found!</h3>;

    return expenses && <ExpensesTable expenses={expensesPerCategory} slug={slug} />;
}

export default Expenses;
