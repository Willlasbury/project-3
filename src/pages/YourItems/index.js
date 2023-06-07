import React, { useState, useEffect } from "react";
import Item from "../ItemProp";
import itemsAPI from "../../utils/API/items";
import usersApi from "../../utils/API/users";
import "../../index.css";
import { useNavigate } from "react-router-dom";
export default function Browse({ userId, token }) {
  const [items, setItems] = useState([]);

  // Fetch items data and update the items state
  //TODO:add token user id once that is up and running
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await itemsAPI.getItemsSellerId(userId);
        setItems(fetchedItems);
        console.log("fetchedItems:", fetchedItems);
      } catch (error) {
        console.log("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  if (!items) {
    return (
      <div className="browse flex flex-col items-center mt-20">
        <h1 className="px-3 m-2 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-cyan-500 text-xl font-medium">
          Your Items
        </h1>
        <h2>You do not have any items yet!</h2>
      </div>
    );
  } else {
    return (
      <div className="browse flex flex-col items-center mt-20">
        <h1 className="px-3 m-2 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-cyan-500 text-xl font-medium">
          Your Items
        </h1>
        <ul className="item-list">
          {items.map((item) => (
            <li key={item.id}>
              <Item
                id={item.id}
                picture={item.Photos}
                title={item.title}
                category={item.category}
                condition={item.condition}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
