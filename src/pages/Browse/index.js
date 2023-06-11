import React, { useState, useEffect } from "react";
import Item from "../ItemProp";
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
  console.log("items:", items);

  return (
    <div className="flex flex-col items-center mt-5 mb-5">
      <h1 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium">
        Browse Items
      </h1>
      <div className="item-list">
        {items.map((item) => (
          <div
            key={item.id}
            className="card mx-auto my-4 p-4 max-w-sm bg-amber-100 rounded-lg shadow-lg text-center"
          >
            <Item
              id={item.id}
              picture={item.Photos}
              title={item.title}
              categoryId={item.CategoryId}
              condition={item.condition}
              description={item.description}
              seller_id={item.seller_id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
