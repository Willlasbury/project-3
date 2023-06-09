import React from "react";
import "../../index.css";
import { Link, useNavigate } from "react-router-dom";
import itemsAPI from "../../utils/API/items";
import { useEffect, useState, useLocation, useRef } from "react";
import "./style.css";
import Item from "../ItemProp/index";

export default function Offer({ token, socket, userId }) {
  //navigates back to home page
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  let imageArr = [];
  const [offerText, setOfferText] = useState("");
  const [offerItem, setOfferItemValue] = useState("");
  
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  cloudinaryRef.current = window.cloudinary;
  widgetRef.current = cloudinaryRef.current.createUploadWidget(
    {
      cloudName: "dlnloe77d",
      uploadPreset: "zoosknbg",
    },
    function (error, result) {
      if (result.event === "success") {
        console.log("result secure url?:", result.info.secure_url);
        imageArr.push(result.info.secure_url);
        console.log("result:", result);
      }
    }
  );

  //sets item state
  const [item, setItem] = useState({
    Photos: [{}],
  });

  //submit's offer to socketIO

  //gets item id from the parameters
  const itemId = window.location.pathname.replace("/offer/", "");
  console.log("itemId:", itemId);
  //uses itemId to fetch the specific item

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const fetchedItem = await itemsAPI.getItemId(itemId);
        setItem(fetchedItem);
        console.log("fetchedItem:", fetchedItem);
      } catch (error) {
        console.log("Error fetching items:", error);
      }
    };

    fetchItem();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "OfferText") {
      return setOfferText(value);
    }
    if (name === "offerItem") {
      return setOfferItemValue(value);
    }

  };

  const handleOffer = (e) => {
    e.preventDefault();

    const newOffer = {
      offerItem: offerItem,
      offerText: offerText,
    };

    const data = {
      token: token,
      item: item,
      data: newOffer,
    };
    socket.emit("offer", data);
  };
  console.log("item.seller_id:", item.seller_id);
  console.log("userId:", userId);
  
  return (
    //TODO: add individual item and offer form. Add handle offer
    <>
      <Item
        id={item.id}
        picture={item.Photos}
        title={item.title}
        category={item.category}
        condition={item.condition}
        description={item.description}
        seller_id={item.seller_id}
      />
      <div className="flex flex-col items-center mb-5 mt-5">
        <div className="card mx-auto p-4 max-w-sm border-stone-950 bg-amber-100 rounded-lg shadow-lg text-center">
          <form>
            <input
              type="text"
              id="default-input"
              className="input-field px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
              value={offerItem}
              name="offerItem"
              onChange={handleInputChange}
              placeholder="Offer Item"
            />
            <input
              type="text"
              id="default-input"
              className="input-field px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
              value={offerText}
              name="OfferText"
              onChange={handleInputChange}
              placeholder="What would you like to offer?"
            />
            <button
              className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium"
              onClick={handleOffer}
            >
              Submit Offer
            </button>
          </form>
        </div>
      </div>
  </>
  );
}
