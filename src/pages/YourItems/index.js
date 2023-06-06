import React, { useState, useEffect } from "react";
import Item from "../ItemProp";
import usersApi from "../../utils/API/users";
import "../../index.css";
export default function Browse() {
  const [items, setItems] = useState([]);

  // Fetch items data and update the items state
  //TODO:add token user id once that is up and running
  useEffect(() => {
    const userId = localStorage.getItem("tokenId");
    console.log("userId:", userId);
    usersApi.getUserId(`${userId}`).then((data) => {
      console.log("data:", data);
      // setItems(data.Seller);
    });
  }, []);

  return (
    <div className="browse flex flex-col items-center mt-20">
      <h1 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium">Your Items</h1>
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id}>
            <Item
              id={item.id}
              picture={item.picture}
              title={item.title}
              category={item.category}
              condition={item.condition}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
