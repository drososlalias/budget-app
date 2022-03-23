import { useContext } from "react";
import Card from "../components/layout/utils/Card";
import MainContext from "../context/main-context/MainContext";

function Home() {
    const { categories, loading } = useContext(MainContext);

    if (loading) return <div>Loading...</div>;

    if (categories.length < 1) return <h3>No Data were found</h3>;

    return (
        <main className="flex flex-col gap-2">
            {categories && categories.map((cat) => <Card key={cat.id} category={cat.name} slug={cat.slug} total={cat.total} max={cat.max} />)}
        </main>
    );
}

export default Home;
