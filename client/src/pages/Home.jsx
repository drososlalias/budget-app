import { useContext } from "react";
import Card from "../components/layout/utils/Card";
import MainContext from "../context/main-context/MainContext";

function Home() {
    const { categories, loading, expenses } = useContext(MainContext);
    if (loading) return <div>Loading...</div>;
    if (categories.length < 1 || !categories) return <h3>No Data were found</h3>;

    return (
        <main className="flex flex-col gap-2">
            {categories.map((cat) => (
                <Card key={cat.id} id={cat.id} category={cat.name} slug={cat.slug} max={cat.max} expenses={expenses} />
            ))}
        </main>
    );
}

export default Home;
