import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";


export default function Offer() {
    return (
    <div className="flex flex-col items-center">
    <h1> Click on the Item that you would like to make an offer on</h1>
    <Link to={`/items`} className="item-link text-black">
      </Link>
    </div>
    );
}