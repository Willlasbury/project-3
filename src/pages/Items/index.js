import React, { useState, useEffect, useLocation } from "react";
import itemsAPI from "../../utils/API/items";
import AliceCarousel from "react-alice-carousel";
import { useNavigate } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";

export default function Item({ socket, token, userId }) {
   const navigate = useNavigate();
  useEffect(()=>{
    if (!token){
      navigate('/login')
    }

  },[])
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
    event.preventDefault();
    const data = {
      token: token,
      item: item,
      data: "offer",
    };
    socket.emit("offer", data);
  };

return (
  <div className="flex flex-col items-center mt-5">
    <div className="card mx-auto p-4 max-w-sm border-stone-950 bg-amber-100 rounded-lg shadow-lg text-center">
      <form className="text-xl font-medium">
        <h1 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium m-2">Individual Item</h1>
        <AliceCarousel>
          {item.Photos.map((photo, index) => (
            <img key={index} src={photo.url} className="sliderimg" />
          ))}
        </AliceCarousel>
        <h2 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium m-2">Title: {item.title}</h2>
        <h2 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium m-2">Condition: {item.condition}</h2>
        <h2 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium m-2">Minimum Trade: {item.minimum_trade}</h2>
        {userId === item.seller_id ? (
          <>
            <button onClick={handleOffer} className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium m-2">Submit Offer</button>
            <button className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium m-2">Edit</button>
            <button onClick={deleteItem}className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium m-2">Delete</button>
          </>
        ) : (
          <button onClick={handleOffer} className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium m-2">Submit Offer</button>
        )}
      </form>
    </div>
  </div>
);
}



