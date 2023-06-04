import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Item({ id, picture, title, category, condition }) {
  console.log("picture Individual:", picture[0]);

  return (
    <div className="item-card">
      <img src={picture.url} alt={title} className="item-image" />
      <img
        src={picture.map((url) => picture.url)}
        alt={title}
        className="item-image"
      />
      <h3 className="item-title">{title}</h3>
      <p className="item-category">Category: {category}</p>
      <p className="item-condition">Condition: {condition}</p>

      <Link to={`/item/${id}`} className="item-link">
        View Item
      </Link>
    </div>
  );
}
