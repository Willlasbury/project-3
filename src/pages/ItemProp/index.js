import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import categoriesAPI from "../../utils/API/categories";

export default function Items({
  id,
  picture,
  title,
  categoryId,
  condition,
  description,
}) {
  const [category, setCategory] = useState([]);
  const itemId = id;
  const responsive = {
    0: { items: 1 },
    568: { items: 4 },
    1024: { items: 6 },
  };
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategory = await categoriesAPI.getCategoriesById(
          categoryId
        );
        setCategory(fetchedCategory);
        console.log("fetchedCategory:", fetchedCategory);
      } catch (error) {
        console.log("Error fetching items:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div className="flex flex-col items-center m-3 px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium">
      <AliceCarousel>
        {picture.map((photo, index) => (
          <img key={index} src={photo.url} className="sliderimg " />
        ))}
      </AliceCarousel>
      <h3 className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 item-title text-black">
        {title}
      </h3>
      <p className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 item-category text-black">
        {" "}
        Category: {category.name}
      </p>
      <p className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-black">
        Condition: {condition}
      </p>
      <Link
        to={`/items/${id}`}
        className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium"
      >
        View Item
      </Link>
    </div>
  );
}
