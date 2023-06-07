import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Items({
  id,
  picture,
  title,
  category,
  condition,
  description,
}) {
  const itemId = id;
  const responsive = {
    0: { items: 1 },
    568: { items: 4 },
    1024: { items: 6 },
  };
  return (
    <div className="flex flex-col items-center m-3 px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium">
      <AliceCarousel
        mouseTracking
        infinite
        responsive={responsive}
        controlsStrategy={"default"}
        autoPlayStrategy="all"
        autoPlayInterval={1000}
        autoWidth
      >
        {picture.map((photo, index) => (
          <img key={index} src={photo.url} className="sliderimg " />
        ))}
      </AliceCarousel>
      <h3 className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 item-title text-black">{title}</h3>
      <p className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 item-category text-black"> Category: {category}</p>
      <p className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-black">Condition: {condition}</p>
      <Link
        to={`/items/${id}`}
        className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium"
      >
        View Item
      </Link>
    </div>
  );
}
