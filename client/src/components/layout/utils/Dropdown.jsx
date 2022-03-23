import React from "react";

function Dropdown() {
    return (
        <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn m-1">
                hover :)
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li className="hover:bg-slate-600 p-2">Needs</li>
                <li className="hover:bg-slate-600 p-2">Wants</li>
                <li className="hover:bg-slate-600 p-2">Savings</li>
            </ul>
        </div>
    );
}

export default Dropdown;
