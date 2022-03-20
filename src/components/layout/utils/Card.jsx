import React from "react";
import { Link } from "react-router-dom";

function Card({ category, slug, total, max }) {
    const percentage = Math.floor((total / max) * 100);

    return (
        <div className="card bg-slate-700 shadow-xl">
            <div className="flex flex-col justify-between gap-4">
                <div className="flex justify-between py-2 px-6">
                    <h3 className="text-lg">{category}</h3>
                    <p>
                        {total} / {max}
                    </p>
                </div>
                <div className="flex justify-evenly">
                    <progress className="progress progress-primary w-3/4 self-center" value={total} max={max}></progress>
                    <div className="radial-progress" style={{ "--value": percentage, "--size": "3rem" }}>
                        <p className="text-xs">{percentage}%</p>
                    </div>
                </div>
                <Link to={`/expenses/${slug}`} className="btn btn-primary w-1/4 text-xs self-end mb-2 mr-2">See expenses</Link>
            </div>
        </div>
    );
}

export default Card;
