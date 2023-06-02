import React from "react";
// import { useState } from "react";

import "./style.css";

export default function Search () {
    return (
        <form>
            <div>
                <label htmlFor="search">Search:</label>
                <input 
                name="search"
                type="text"
                placeholder="Search for items"
                />
                <br />
                <button
                type="submit"
                >
                Search</button>
            </div>
        </form>
    );
}