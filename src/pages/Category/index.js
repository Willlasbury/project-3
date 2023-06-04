import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl border-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl">Category</h1>
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
