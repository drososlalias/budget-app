import React from "react";
import Dropdown from "./Dropdown";

function Modal() {
    return (
        <div>
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
                            <Dropdown />
                        </div>
                        <input
                            className="py-2 font-bold text-center bg-gray-800 self-center w-72 rounded-3xl"
                            placeholder="Enter description"
                        />
                        <input
                            className="py-2 font-bold text-center bg-gray-800  self-center w-52 rounded-3xl"
                            placeholder="Enter amount"
                        />
                        <button className="btn btn-primary w-1/3 self-center">Add</button>
                    </div>
                </label>
            </label>
        </div>
    );
}

export default Modal;
