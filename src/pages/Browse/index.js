import React, { useState, useEffect } from "react";
import Item from "../Item";
import itemsAPI from "../../utils/API/items";

export default function Browse() {
  const [items, setItems] = useState([]);

  // Fetch items data and update the items state
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await itemsAPI.getItems();
        setItems(fetchedItems);
      } catch (error) {
        console.log("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="browse">
      <h1>Browse Items</h1>
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
