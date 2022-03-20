import axios from "axios";

const BACKEND_URL = "http://localhost:3003";

const local = axios.create({
    baseURL: BACKEND_URL,
});

export const getExpenses = async () => {
    const { data } = local.get("/expenses");
    if (data.api_status) return data.results;
    return data.msg;
};

export const getCategoriesData = async () => {
    const { data } = await local.get("/categories");
    if (data.api_status) return data.results;
    return data.msg;
};
