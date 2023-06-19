import React from "react";
import "../../index.css";
import { Link, useNavigate } from "react-router-dom";
import itemsAPI from "../../utils/API/items";
import categoriesAPI from "../../utils/API/categories";
import userAPI from "../../utils/API/users";
import { useEffect, useState, useLocation, useRef } from "react";
import "./style.css";
import Item from "../../components/ItemProp/index";

export default function Offer({ token, socket }) {
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
        imageArr.push(result.info.secure_url);
      }
    }
  );

  //sets item state
  const [item, setItem] = useState({
    Photos: [{}],
  });
  const [category, setCategory] = useState([]);
  const [seller, setSeller] = useState([]);

  //submit's offer to socketIO

  //gets item id from the parameters
  const itemId = window.location.pathname.replace("/offer/", "");
  //uses itemId to fetch the specific item

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
    navigate('/notifications');
  };
    return (
      //TODO: add individual item and offer form. Add handle offer
      <div className="m-2 flex flex-col items-center">
        <article className="card mx-auto my-4 p-4 max-w-sm bg-amber-100 rounded-lg shadow-lg text-center">
          <Item
            className="w-auto"
            id={itemId}
            picture={item.Photos}
            title={item.title}
            category={item.category}
            condition={item.condition}
            description={item.description}
            seller_id={item.seller_id}
          />
        </article>
        <div className="card px-3 py-4 bg-amber-100 border-4 border-stone-950 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              id="default-input"
              className="input-field px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium m-1"
              value={offerItem}
              name="offerItem"
              onChange={handleInputChange}
              placeholder="Offer Item"
            />
            <input
              type="text"
              id="default-input"
              className="input-field px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium m-1"
              value={offerText}
              name="OfferText"
              onChange={handleInputChange}
              placeholder="What would you like to offer?"
            />
            <button
              className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium m-1"
              onClick={handleOffer}
            >
              Submit Offer
            </button>
          </div>
        </div>
      </div>
    );
  }

