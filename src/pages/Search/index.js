import React from "react";
// import { useState } from "react";

import "./style.css";

export default function Search () {
    return (
        <form className="flex flex-col items-center mt-20">
            <div>
                <label type="search"></label>
                <input 
                className="search m-2 px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
                type="text"
                placeholder="Search for items"
                />
                <br />
                <button
                className="px-3 m-2 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-cyan-500 text-xl font-medium"
                type="submit"
                >
                Search</button>
            </div>
        </form>
    );
}