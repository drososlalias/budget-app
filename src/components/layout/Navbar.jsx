import { Link } from "react-router-dom";
import Modal from "./utils/Modal";

function Navbar() {
    return (
        <div className="navbar bg-neutral text-neutral-content rounded-xl mt-4 flex justify-between">
            <Link to={'/'} className="btn btn-ghost normal-case text-xl">stillDro</Link>
            <Modal />
        </div>
    );
}

export default Navbar;
