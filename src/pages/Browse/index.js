import React, { useState, useEffect } from "react";
import Item from "../../components/ItemProp";
import itemsAPI from "../../utils/API/items";
import categoryAPI from "../../utils/API/categories";
import "../../index.css";
import { useNavigate } from "react-router-dom";

export default function Browse({ token }) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  // Fetch items data and update the items state

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    const fetchItems = async () => {
      try {
        const fetchedItems = await itemsAPI.getItemsBrowse(token);
        setItems(fetchedItems);
      } catch (error) {
        console.log("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <h1 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium text-center">
        Browse Items
      </h1>
      <ul className="w-3/4 flex flex-col w-full">
        {items.map((item) => (
          <Item key={item.id} yourItem={false} item={item} />
        ))}
      </ul>
    </>
  );
}
