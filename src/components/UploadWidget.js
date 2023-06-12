import React from "react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import itemsAPI from "../utils/API/items";
import CategoryOptions from "./CategoryOptions";
const UploadWidget = ({ categoryOptions, token }) => {
  const navigate = useNavigate();
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
    // return name === "title" ? setTitle(value) : setMinimum_trade(value);
  };
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  // useEffect(() => {
  cloudinaryRef.current = window.cloudinary;
  // console.log("cloudinaryRef:", cloudinaryRef);
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
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("description:", description);
    console.log("title:", title);
    console.log("minimum_trade:", minimum_trade);
    console.log("condition:", condition);
    if (imageArr.length === 0 || !title || !condition ||!category||!minimum_trade || !description) {
      alert("You must input at least 1 photo and fill in all fields to post an item.");
    } else {
      itemsAPI.createItems(
        title,
        category,
        minimum_trade,
        description,
        imageArr,
        condition,
        token
      );
      setTitle("");
      setMinimum_trade("");
      setCategory("");
      setCondition("");
      setDescription("");
      navigate('/YourItems')
      
    }
  };
  return (
    <div className="m-2 flex flex-col items-center">
      <div className="card px-3 py-4 bg-amber-100 border-4 border-stone-950 rounded-lg shadow-lg">
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            id="default-input"
            className="input-field px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
            value={title}
            name="title"
            onChange={handleInputChange}
            placeholder="Item"
          />
          <select
            type="number"
            id="default-input"
            className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
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
          
          <select
            className="input-field px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
            name="category"
            onChange={handleInputChange}
          >
            {/* <option value="" disabled selected>
              Select a category
            </option>{" "} */}
            {categoryOptions &&
              categoryOptions.map((value) => {
                // console.log("value:", value)
                return <CategoryOptions key={value.id} category={value.name} />;
              })}
          </select>
          <select
            defaultValue="Select a Condition"
            className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
            name="condition"
            onChange={handleInputChange}
          >
            {/* <option value="" disabled selected>
            Select a Condition
          </option>*/}
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
          </button>
          <button
            className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium"
            onClick={handleFormSubmit}
          >
            Create Posting
          </button>
        </div>
      </div>
    </div>
  );
};
export default UploadWidget;