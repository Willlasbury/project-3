import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


export default function Offer() {
    return (
    <>
    <h1> Click on the Item that you would like to make an offer on</h1>
    <Link to={`/items`} className="item-link text-black">
      </Link>
    </>
    );
}