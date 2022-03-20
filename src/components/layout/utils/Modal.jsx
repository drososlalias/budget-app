import { useState, useContext } from "react";
import MainContext from "../../../context/main-context/MainContext";
import AlertContext from "../../../context/alert/AlertContext";

function Modal() {
    const { categories } = useContext(MainContext);
    const { setAlert } = useContext(AlertContext);

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(null);
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!description || !amount || !category) {
            setAlert("All fields are required", "error");
        }
        const categoryId = categories.filter(cat => cat.name == category)[0].id

        // TODO: add expense - create the api route to add 
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="my-modal-4" className="btn modal-button">
                Add Expense
            </label>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative max-w-80 h-full max-h-96 overflow-hidden" htmlFor>
                    <div className="flex flex-col gap-5">
                        <h3 className="text-lg font-bold text-center">Add an expense</h3>
                        <div className="flex justify-evenly ">
                            <p className="py-4">Choose a category</p>
                            <select
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                }}
                                className="select select-primary w-1/2 max-w-xs"
                                defaultValue="choose-category"
                            >
                                <option value={"choose-category"} disabled>
                                    Choose Category
                                </option>
                                {categories &&
                                    categories.map((cat) => (
                                        <option id={cat.id} key={cat.id}>
                                            {cat.name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <input
                            onChange={(e) => setDescription(e.target.value)}
                            className="py-2 font-bold text-center bg-gray-800 self-center w-72 rounded-3xl"
                            placeholder="Enter description"
                        />
                        <input
                            onChange={(e) => setAmount(e.target.value)}
                            className="py-2 font-bold text-center bg-gray-800  self-center w-52 rounded-3xl"
                            placeholder="Enter amount"
                        />
                        <button type="submit" className="btn btn-primary w-1/3 self-center">
                            Add
                        </button>
                    </div>
                </label>
            </label>
        </form>
    );
}

export default Modal;
