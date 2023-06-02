import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <h1>Category</h1>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        <option value="sporting goods">Sporting Goods</option>
        <option value="home furnishings">Home Furnishings</option>
        <option value="auto">Auto</option>
        <option value="electronics">Electronics</option>
        <option value="pet gear">Pet Gear</option>
        <option value="free">Free</option>
      </select>
      {selectedCategory && (
        <Link to={`/items?category=${selectedCategory}`}>
          View Items in {selectedCategory}
        </Link>
      )}
    </div>
  );
}
