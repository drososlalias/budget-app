const mainReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
            };
        case "GET_CATEGORIES_DATA":
            return {
                ...state,
                categories: action.payload,
                loading: false,
            };
        case "GET_EXPENSES":
            return {
                ...state,
                expenses: action.payload,
                loading: false,
            };
        case "ADD_EXPENSE":
            const expenses = state.expenses;
            const categories = state.categories;
            expenses.push(action.payload);
            const changedCategories = [];
            categories.forEach((cat) => {
                if (cat.id === action.payload.categoryId) {
                    cat.total = (+cat.total + +action.payload.amount).toString();
                    changedCategories.push(cat);
                } else changedCategories.push(cat);
            });
            return {
                ...state,
                categories: changedCategories,
                expenses: expenses,
            };
        case "NO_EXPENSES_FOUND":
            return {
                ...state,
                expenses: [],
                loading: false,
            };
        default:
            return state;
    }
};

export default mainReducer;
