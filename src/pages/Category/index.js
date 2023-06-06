import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium">Category</h1>
      <select className="px-3 m-2 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        <option value="sporting goods">Sporting Goods</option>
        <option value="home furnishings">Home Furnishings</option>
        <option value="auto">Auto</option>
        <option value="electronics">Electronics</option>
        <option value="pet gear">Pet Gear</option>
        <option value="free">Free</option>
      </select>
      {selectedCategory && (
        <Link className="px-3 m-2 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium" to={`/items?category=${selectedCategory}`}>
          View Items in {selectedCategory}
        </Link>
      )}
    </div>
  );
}

