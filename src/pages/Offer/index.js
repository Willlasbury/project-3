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
<<<<<<< HEAD
  },[])
    return (
    <div className="flex flex-col items-center mt-5">
    <h1 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium"> Click on the Item that you would like to make an offer on</h1>
    <Link to={`/items`} className="item-link text-black">
      </Link>
    </div>
    );
}
=======
  }, []);

  let imageArr = [];
  const [offerText, setOfferText] = useState("");
  const [offerItem, setOfferItemValue] = useState("");
  // const [category, setCategory] = useState("");
  // const [condition, setCondition] = useState("");
  // const [description, setDescription] = useState("");

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

    // if (name === "category") {
    //   return setCategory(value);
    // }

    // if (name === "condition") {
    //   return setCondition(value);
    // }
    // if (name === "description") {
    //   return setDescription(value);
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
  // if (userId === item.seller_id) {
  //   return <h2>You cannot make an offer on an item you posted</h2>;
  // } else {
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

      <div className="card px-3 py-4 bg-amber-100 border-4 border-stone-950 rounded-lg shadow-lg">
        <div className="flex flex-col space-y-4">
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

            {/*
            <select
              className="input-field px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
              name="category"
              onChange={handleInputChange}
            >
              <option value="sporting goods">Sporting Goods</option>
              <option value="home furnishings">Home Furnishings</option>
              <option value="auto">Auto</option>
              <option value="electronics">Electronics</option>
              <option value="pet gear">Pet Gear</option>
              <option value="free">Free</option>
            </select>
            <select
              defaultValue="Select a Condition"
              className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
              name="condition"
              onChange={handleInputChange}
            >
              <option value="Like New">Like New</option>
              <option value="Slightly Used">Slightly Used</option>
              <option value="Used">Used</option>
              <option value="Decent">Decent</option>
              <option value="Rough">Rough</option>
            </select>
            <input
              type="text"
              id="default-input"
              className="input-field px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
              value={description}
              name="description"
              onChange={handleInputChange}
              placeholder="description"
            />
            <button
              className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium"
              onClick={(e) => {
                e.preventDefault();
                widgetRef.current.open();
              }}
            >
              Upload
            </button> */}
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
>>>>>>> dev
