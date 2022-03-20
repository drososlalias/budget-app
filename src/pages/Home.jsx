import { useEffect, useContext } from "react";
import Card from "../components/layout/utils/Card";
import MainContext from "../context/main-context/MainContext";
import { getCategoriesData } from "../context/main-context/MainAction";

function Home() {
    const { categories, dispatch, loading } = useContext(MainContext);

    const getData = async () => {
        const data = await getCategoriesData();
        dispatch({ type: "GET_CATEGORIES_DATA", payload: data });
    };

    useEffect(() => {
        dispatch({ type: "SET_LOADING" });
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return <div>Loading...</div>;

    return <main className="flex flex-col gap-2">{categories && categories.map((cat) => <Card key={cat.id} category={cat.name} slug={cat.slug} total={cat.total} max={cat.max} />)}</main>;
}

export default Home;
