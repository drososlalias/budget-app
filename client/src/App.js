import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Alert from "./components/layout/Alert";
import MainContext from "./context/main-context/MainContext";
import Expenses from "./pages/Expenses";
import { getCategoriesData } from "./context/main-context/MainAction";
import { getExpenses } from "./context/main-context/MainAction";

function App() {
    const { dispatch } = useContext(MainContext);

    const fetchExpenses = async () => {
        const data = await getExpenses();
        if (data.api_status) {
            dispatch({ type: "GET_EXPENSES", payload: data.results });
        } else {
            dispatch({ type: "NO_EXPENSES_FOUND" });
        }
    };

    const getData = async () => {
        const data = await getCategoriesData();
        if (data.api_status) {
            localStorage.setItem("categories", JSON.stringify(data.results));
            dispatch({ type: "GET_CATEGORIES", payload: data.results });
        }
    };

    useEffect(() => {
        dispatch({ type: "SET_LOADING" });
        if (!localStorage.getItem("categories")) {
            getData();
        } else {
            dispatch({ type: "GET_CATEGORIES", payload: JSON.parse(localStorage.getItem("categories")) });
        }
        fetchExpenses();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Router>
            <div className="container mx-auto max-w-2xl flex flex-col justify-between h-screen ">
                <Navbar />
                <Alert />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/expenses/:slug" element={<Expenses />} />
                    <Route path="/notfound" element={<NotFound />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
