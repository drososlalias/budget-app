const mainReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
            };
        case "GET_CATEGORIES":
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
            return {
                ...state,
                expenses: [
                    ...state.expenses,
                    {
                        id: action.payload.id,
                        description: action.payload.description,
                        amount: action.payload.amount,
                        category_id: action.payload.categoryId,
                        expense_date: action.payload.expenseDate
                    },
                ],
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
