import React from "react";
import { useEffect, useRef, useState } from "react";
import itemsAPI from "../utils/API/items";

const UploadWidget = () => {
  const [title, setTitle] = useState("");
  const [minimum_trade, setMinimum_trade] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
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
    function(error, result) {
      if (result.event === "success") {
        console.log("result secure url?:", result.info.secure_url);
        uploadedImage = result.info.secure_url;
        //TODO: add post route here
        return uploadedImage;
        {
        }
      }
    }
  );
  // }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("title:", title);
    console.log("minimum_trade:", minimum_trade);
    console.log("uploadedImage:", uploadedImage);
    console.log(typeof parseInt(minimum_trade));
    console.log("category:", category);
    console.log("condition:", condition);

    itemsAPI.createItems(
      title,
      category,
      minimum_trade,
      uploadedImage,
      condition,
      false
    );
    setTitle("");
    setMinimum_trade("");
    setCategory("");
    setCondition("");
  };

  return (
    <>
      <p>Post Item</p>
      <form className="form">
        <input
          value={title}
          name="title"
          onChange={handleInputChange}
          type="text"
          placeholder="Item"
        />
        <input
          value={minimum_trade}
          name="minimum_trade"
          onChange={handleInputChange}
          type="number"
          placeholder="Minimum trade value"
        />
        <select name="category" onChange={handleInputChange}>
          <option value="" disabled selected>
            Select a category
          </option>
          <option value="electronics">Electronics</option>
          <option value="automotive">automotive</option>
          <option value="Home Appliances">Home Appliances</option>
          <option value="Food">Food</option>
        </select>
        <select name="condition" onChange={handleInputChange}>
          <option value="" disabled selected>
            Select a Condition
          </option>
          <option value="Like New">Like New</option>
          <option value="Slightly Used">Slightly Used</option>
          <option value="Used">Used</option>
          <option value="Decent">Decent</option>
          <option value="Rough">Rough</option>
        </select>
        <button
          onClick={(e) => {
            e.preventDefault();
            widgetRef.current.open();
          }}
        >
          Upload
        </button>
        <button onClick={handleFormSubmit}>Create Posting</button>
      </form>
    </>
  );
};

export default UploadWidget;
