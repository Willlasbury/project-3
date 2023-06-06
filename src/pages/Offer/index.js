import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";


export default function Offer() {
    return (
    <div className="flex flex-col items-center mt-20">
    <h1 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium"> Click on the Item that you would like to make an offer on</h1>
    <Link to={`/items`} className="item-link text-black">
      </Link>
    </div>
    );
}