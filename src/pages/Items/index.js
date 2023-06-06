import React, { useState, useEffect, useLocation } from "react";
import itemsAPI from "../../utils/API/items";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Item({socket, token}) {
  // console.log("id:", id);
  const [items, setItems] = useState({
    Photos: [{}],
  });

  // console.log(
  //   "window.location.pathname:",
  //   window.location.pathname.replace("/item/", "")

  const itemId = window.location.pathname.replace("/items/", "");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await itemsAPI.getItemId(itemId);
        setItems(fetchedItems);
      } catch (error) {
        console.log("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const handleOffer = () => {
    const data = {
      token: token,
      data: 'offer',
    }
    socket.emit('offer', data)
  }


  return (
    <div className="flex flex-col items-center mt-20">
      <form className="px-3 m-2 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold text-xl font-medium">
      <h1>Individual Item</h1>
      <AliceCarousel>
        {items.Photos.map((photo, index) => (
          <img key={index} src={photo.url} className="sliderimg" />
        ))}
      </AliceCarousel>
      <h2>Title:{items.title}</h2>
      <h2>Condition:{items.condition}</h2>
      <h2>minimum_trade:{items.minimum_trade}</h2>
      <button onClick={handleOffer}>Submit Offer</button>
      </form>
    </div>
  );
}
