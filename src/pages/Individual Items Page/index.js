import React, { useState, useEffect, useLocation } from "react";
import itemsAPI from "../../utils/API/items";
import AliceCarousel from "react-alice-carousel";
import { useNavigate } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";

export default function Item({ socket, token, userId }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  const [item, setItem] = useState({
    Photos: [{}],
  });

  const itemId = window.location.pathname.replace("/items/", "");
  console.log("itemId:", itemId);

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

  const deleteItem = (event) => {
    event.preventDefault();
    itemsAPI.deleteItemId(item.id);
    navigate("/YourItems");
  };

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
    <div className="flex flex-col items-center mt-20">
      <div className="card mx-auto p-4 max-w-sm border-stone-950 bg-amber-100 rounded-lg shadow-lg text-center">
        <form className="text-xl font-medium">
          <h1 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium">
            Individual Item
          </h1>
          <AliceCarousel>
            {item.Photos.map((photo, index) => (
              <img key={index} src={photo.url} className="sliderimg" />
            ))}
          </AliceCarousel>
          <h2 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium">
            Title: {item.title}
          </h2>
          <h2 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium">
            Condition: {item.condition}
          </h2>
          <h2 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium">
            Category: {item.category}
          </h2>
          <h2 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium">
            Minimum Trade: {item.minimum_trade}
          </h2>
          <h2 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium">
            Description: {item.description}
          </h2>

          {userId === item.seller_id ? (
            <>
              <button
                onClick={handleOffer}
                className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
              >
                Submit Offer
              </button>
              <button
                className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
                onClick={() => {
                  navigate(`editItem`);
                }}
              >
                Edit
              </button>
              <button
                onClick={deleteItem}
                className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
              >
                Delete
              </button>
            </>
          ) : (
            <button
              onClick={handleOffer}
              className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
            >
              Submit Offer
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
