import React, { useState, useEffect, useLocation } from "react";
import itemsAPI from "../../utils/API/items";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";

export default function Item() {
  // console.log("id:", id);
  const [items, setItems] = useState({
    Photos: [{}],
  });

  const style = {
    alignItems: "center",
  };

  // console.log(
  //   "window.location.pathname:",
  //   window.location.pathname.replace("/item/", "")

  const itemId = window.location.pathname.replace("/item/", "");
  console.log("itemId:", itemId);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await itemsAPI.getItemId(itemId);
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
    <div className="flex flex-col mt-20">
      <form className="px-3 m-2 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold text-xl font-medium">
        <h1>Individual Item</h1>
        <AliceCarousel
          mouseTracking
          infinite
          controlsStrategy={"default"}
          autoPlayStrategy="all"
          autoPlayInterval={1000}
          disableDotsControls
          disableButtonsControls
          keyboardNavigation
        >
          {items.Photos.map((photo, index) => (
            <img key={index} src={photo.url} className="sliderimg" />
          ))}
        </AliceCarousel>
        <h2>Title:{items.title}</h2>
        <h2>Condition:{items.condition}</h2>
        <h2>Minimum Trade Value:{items.minimum_trade}</h2>
        <h2>Description:{items.description}</h2>
      </form>
    </div>
  );
}
