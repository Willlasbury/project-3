import React, { useState, useEffect, useLocation } from "react";
import itemsAPI from "../../utils/API/items";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";

export default function Item({socket, token}) {
  const [item, setItem] = useState({
    Photos: [{}],
  });

  const itemId = window.location.pathname.replace("/items/", "");

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const fetchedItem = await itemsAPI.getItemId(itemId);
        setItem(fetchedItem);
      } catch (error) {
        console.log("Error fetching items:", error);
      }
    };

    fetchItem();
  }, []);

  const handleOffer = (event) => {
    event.preventDefault()
    const data = {
      token: token,
      item: item,
      data: 'offer',
    }
    socket.emit('offer', data)
  }


  return (
    <div className="flex flex-col items-center mt-20">
      <form className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium">
      <h1>Individual Item</h1>
      <AliceCarousel>
        {item.Photos.map((photo, index) => (
          <img key={index} src={photo.url} className="sliderimg" />
        ))}
      </AliceCarousel>
      <h2>Title:{item.title}</h2>
      <h2>Condition:{item.condition}</h2>
      <h2>minimum_trade:{item.minimum_trade}</h2>
      <button onClick={handleOffer}>Submit Offer</button>
      </form>
    </div>
  );
}
