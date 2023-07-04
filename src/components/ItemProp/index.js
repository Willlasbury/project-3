import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";
import { Link } from "react-router-dom";

import itemsAPI from "../../utils/API/items";

export default function Item({ yourItem, item }) {

  const deleteItem = (event) => {
    event.preventDefault();
    itemsAPI.deleteItemId(item.id);
    window.location.reload()
  };

  return (
      <section className="flex flex-col w-1/2 items-center m-3 mx-auto p-4 max-w-sm border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium">
        <AliceCarousel>
          {item.Photos.map((photo, index) => (
            <img key={index} src={photo.url} className="sliderimg" />
          ))}
        </AliceCarousel>
        <h3 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 item-title text-black font-bold text-xl m-1">
          {item.title}
        </h3>
        <h3 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 item-title text-black m-1">
          Seller: {item.Seller.userName}
        </h3>
        <p className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 item-category text-black m-1">
          {" "}
          Category: {item.Category.name}
        </p>
        <p className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-black m-1">
          Condition: {item.condition}
        </p>
        {yourItem ? (
          <>
            <Link
            to={`/items/${item.id}/editItem`}
            className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium m-1"
          >
            Edit Item
          </Link>
            <button
              onClick={deleteItem}
              className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium m-2"
            >
              Delete
            </button>
          </>
        ) : (
          <Link
            to={`/items/${item.id}`}
            className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium m-1"
          >
            View Item
          </Link>
        )}
      </section>
  );
}
