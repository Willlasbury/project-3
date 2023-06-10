import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import categoriesAPI from "../../utils/API/categories";
import userAPI from "../../utils/API/users";
import itemsAPI from "../../utils/API/items";

export default function Items({
  id,
  picture,
  title,
  categoryId,
  condition,
  description,
  seller_id,
}) {
  const [category, setCategory] = useState([]);
  const [seller, setSeller] = useState([]);
  const [item, setItem] = useState({
    Photos: [{}],
  });
  const itemId = id;
  const responsive = {
    0: { items: 1 },
    568: { items: 4 },
    1024: { items: 6 },
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const fetchedItem = await itemsAPI.getItemId(itemId);
        setItem(fetchedItem);
        const fetchedCategory = await categoriesAPI.getCategoriesById(
          fetchedItem.CategoryId
        );
        setCategory(fetchedCategory);

        const fetchedUser = await userAPI.getUserId(fetchedItem.seller_id);
        setSeller(fetchedUser);
      } catch (error) {}
    };

    fetchItem();
  }, []);

  return (
    <div className="flex flex-col items-center m-3 mx-auto p-4 max-w-sm border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium">
      <AliceCarousel>
        {picture.map((photo, index) => (
          <img key={index} src={photo.url} className="sliderimg " />
        ))}
      </AliceCarousel>
      <h3 className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 item-title text-black font-bold text-xl m-1">
        {title}
      </h3>
      <h3 className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 item-title text-black m-1">
        Seller: {seller.userName}
      </h3>
      <p className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 item-category text-black m-1">
        {" "}
        Category: {category.name}
      </p>
      <p className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-black m-1">
        Condition: {condition}
      </p>
      <Link
        to={`/items/${id}`}
        className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium m-1"
      >
        View Item
      </Link>
    </div>
  );
}
