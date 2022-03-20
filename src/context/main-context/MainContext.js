import { createContext, useReducer } from "react";
import mainReducer from "./MainReducer";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
    const initialState = {
        categories: [],
        loading: false,
        expenses: [],
    };

    const [state, dispatch] = useReducer(mainReducer, initialState);

    return <MainContext.Provider value={{ ...state, dispatch }}>{children}</MainContext.Provider>;
};

export default MainContext;
