import axios from "axios";

const BACKEND_URL = "http://localhost:3003";

const local = axios.create({
    baseURL: BACKEND_URL,
});

export const getExpenses = async () => {
    const { data } = await local.get('/expenses');
    return data;
};

export const getCategoriesData = async () => {
    const { data } = await local.get("/categories");
    return data;
};

export const addExpense = async (payload) => {
    try {
        const { data } = await local.post("/expenses", {
            ...payload,
        });
        return data;
    } catch (err) {
        return { error: "An error occured." };
    }
};
