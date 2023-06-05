import React, { useState, useEffect } from "react";
import Item from "../ItemProp";
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
    <div className="flex flex-col items-center">
      <h1 className="text-3xl border-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl">
        Browse Items
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
