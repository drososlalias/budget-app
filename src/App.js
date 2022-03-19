import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Card from "./components/layout/utils/Card";

function App() {
    return (
        <div className="container mx-auto max-w-lg flex flex-col justify-between h-screen gap-3">
            <Navbar />
            <main className="flex flex-col gap-2">
                <Card category="Needs" total={70} max={500} />
                <Card category="Wants" total={26} max={300} />
                <Card category="Savings" total={120} max={200} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
