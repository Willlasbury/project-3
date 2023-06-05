import React, { useState, useEffect } from "react";
import Item from "../ItemProp";
import usersApi from "../../utils/API/users";

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
    <div className="browse">
      <h1>Your Items</h1>
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
