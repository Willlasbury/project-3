import React, { useState, useEffect } from "react";
import itemsAPI from "../../utils/API/items";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Item({ id }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await itemsAPI.getItemId(1);
        console.log("Fetched items:", fetchedItems);
        console.log("fetchedItems.title:", fetchedItems.title);
        console.log("fetchedItems.Photos:", fetchedItems.Photos);
        setItems(fetchedItems);
      } catch (error) {
        console.log("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <h1>Individual Item</h1>
      <AliceCarousel>
        {items.Photos.map((photo, index) => (
          <img key={index} src={photo.url} className="sliderimg" />
        ))}
      </AliceCarousel>
      <h2>Title:{items.title}</h2>
      <h2>Condition:{items.condition}</h2>
      <h2>minimum_trade:{items.minimum_trade}</h2>
    </>
  );
}
