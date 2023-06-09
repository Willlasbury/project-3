import React from "react";

import offerAPI from "../../utils/API/offer";

export default function YourOffer({ offer, socket }) {
  const handleDelete = async (event) => {
    const res = await offerAPI.deleteOffer(offer.id);
    window.location.reload();
  };

  return (
    <article className="flex flex-col my-3 border-4 border-black bg-amber-100">
      <h2>{offer.offerItem}</h2>
      <button
        className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium m-1"
        onClick={handleDelete}
      >
        Delete Offer
      </button>
    </article>
  );
}
