import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Item({ id, picture, title, category, condition }) {
  return (
    <div className="item-card">
      {picture.map((photo, index) => (
        <img key={index} src={photo.url} />
      ))}
      <h3 className="item-title">{title}</h3>
      <p className="item-category">Category: {category}</p>
      <p className="item-condition">Condition: {condition}</p>

      <Link to={`/item/${id}`} className="item-link">
        View Item
      </Link>
    </div>
  );
}
