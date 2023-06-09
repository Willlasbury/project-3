import React, { useState, useEffect } from "react";

import offerAPI from "../../utils/API/offer";
import userAPI from "../../utils/API/users";

export default function YourOffer({ offer, socket }) {
  const [seller, setSeller] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await userAPI.getUserId(offer.Item.seller_id);
        setSeller(fetchedUser);
        console.log("fetchedUser:", fetchedUser);
      } catch (error) {
        console.log("Error fetching items:", error);
      }
    };

    fetchUser();
  }, []);

  const handleDelete = async (event) => {
    const res = await offerAPI.deleteOffer(offer.id);
    window.location.reload();
  };
  console.log("your Offer:", offer);
  return (
    <article className="flex flex-col my-3 border-4 border-black bg-amber-100">
      <h2 className="text-xl font-medium">Offer For: {offer.Item.title}</h2>
      <h2 className="text-xl font-medium">Offer Sent To: {seller.userName}</h2>
      <h2 className="text-xl font-medium">
        Proposed Trade Item: {offer.offerItem}
      </h2>
      <p className="underline">Offer Text:</p>
      <p>{offer.offerText}</p>
      <button
        className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium m-1"
        onClick={handleDelete}
      >
        Delete Offer
      </button>
    </article>
  );
}
