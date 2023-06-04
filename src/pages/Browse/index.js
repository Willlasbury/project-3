import React, { useState, useEffect } from "react";
import Item from "../Item prop";
import itemsAPI from "../../utils/API/items";
import "../../index.css";

export default function Browse() {
  const [items, setItems] = useState([]);

  // Fetch items data and update the items state
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await itemsAPI.getItems();
        console.log("Fetched items:", fetchedItems);
        console.log("picture:", fetchedItems[0].Photos[0].url);
        setItems(fetchedItems);
      } catch (error) {
        console.log("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="browse">
      <h1 className="bg-red-500">Browse Items</h1>
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id}>
            <Item
              id={item.id}
              picture={item.Photos}
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
