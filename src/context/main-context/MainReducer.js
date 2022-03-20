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
        default:
            return state;
    }
};

export default mainReducer;
