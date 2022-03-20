import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Alert from "./components/layout/Alert";
import { MainProvider } from "./context/main-context/MainContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Expenses from "./pages/Expenses";

function App() {
    return (
        <MainProvider>
            <AlertProvider>
                <Router>
                    <div className="container mx-auto max-w-lg flex flex-col justify-between h-screen gap-3">
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
            </AlertProvider>
        </MainProvider>
    );
}

export default App;
