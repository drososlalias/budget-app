import React from "react";
import Modal from "./utils/Modal";

function Navbar() {
    return (
        <div className="navbar bg-neutral text-neutral-content rounded-xl mt-4 flex justify-between">
            <p className="btn btn-ghost normal-case text-xl">stillDro</p>
            <Modal />
        </div>
    );
}

export default Navbar;
