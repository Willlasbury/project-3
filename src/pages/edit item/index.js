import React from "react";
import { useEffect, useRef, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import itemsAPI from "../../utils/API/items";

const EditItem = ({token}) => {
  const navigate = useNavigate();
  const [item, setItem] = useState({
    Photos: [{}],
  });
  const itemId = window.location.pathname
    .replace("/items/", "")
    .replace("/editItem", "");
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
  console.log("item:", item);
  let imageArr = [];
  const [title, setTitle] = useState("");
  const [minimum_trade, setMinimum_trade] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  let uploadedImage = "";
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      return setTitle(value);
    }
    if (name === "minimum_trade") {
      return setMinimum_trade(value);
    }

    if (name === "category") {
      return setCategory(value);
    }

    if (name === "condition") {
      return setCondition(value);
    }
    if (name === "description") {
      return setDescription(value);
    }
  };

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
      } else {
        console.log("error:", error);
      }
    }
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("description:", description);

    itemsAPI.editItem(
      title,
      category,
      minimum_trade,
      description,
      imageArr,
      condition,
      false,
      token,
      itemId
    );
    redirect(`items/${itemId}`);
  };

  return (
    <div className=" m-2 mt-5 flex flex-col items-center">
      <div className="card px-3 py-4 bg-amber-100 border-4 border-stone-950 rounded-lg shadow-lg">
        <div className="flex flex-col space-y-4">
            <input
              type="text"
              id="default-input"
              className="input-field px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
              value={title}
              name="title"
              onChange={handleInputChange}
              defaultValue={item.title}
              placeholder={item.title}
            />
            <select
            type="number"
            id="default-input"
            className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
            defaultValue={item.minimum_trade}
            value={minimum_trade}
            name="minimum_trade"
            onChange={handleInputChange}
            placeholder="Minimum trade value"
          >
            {/* <option value="" disabled selected>
            Select a Condition
          </option>*/}
            <option value="0">Free</option>
            <option value="1">$1-$50</option>
            <option value="2">$50+</option>
            <option value="3">$100+</option>
            <option value="4">$200+</option>
            <option value="5">$500+</option>
          </select>

            {/* <input
              type="number"
              id="default-input"
              className="input-field px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
              value={minimum_trade}
              name="minimum_trade"
              onChange={handleInputChange}
              defaultValue={item.minimum_trade}
              placeholder={item.minimum_trade}
            /> */}
            <select
              className="input-field px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
              name="category"
              onChange={handleInputChange}
            >
              <option value={item.category}>{item.category}</option>
              <option value="sporting goods">Sporting Goods</option>
              <option value="home furnishings">Home Furnishings</option>
              <option value="auto">Auto</option>
              <option value="electronics">Electronics</option>
              <option value="pet gear">Pet Gear</option>
              <option value="free">Free</option>
            </select>
            <select
              className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
              name="condition"
              onChange={handleInputChange}
            >
              <option value={item.condition}>{item.condition}</option>
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
              defaultValue={item.description}
              placeholder={item.description}
            />
            <button
              className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium"
              onClick={(e) => {
                e.preventDefault();
                widgetRef.current.open();
              }}
            >
              Upload
            </button>
            <button
              className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium"
              onClick={handleFormSubmit}
            >
              Edit Posting
            </button>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
