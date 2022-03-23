import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MainProvider } from "./context/main-context/MainContext";
import { AlertProvider } from "./context/alert/AlertContext";

ReactDOM.render(
    <React.StrictMode>
        <MainProvider>
            <AlertProvider>
                <App />
            </AlertProvider>
        </MainProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);
