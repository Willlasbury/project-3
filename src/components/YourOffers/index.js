import React from "react";

import offerAPI from "../../utils/API/offer";

export default function YourOffer({ offer, socket }) {
  

const handleDelete = async (event) => {
  const res = await offerAPI.deleteOffer(offer.id)
  window.location.reload()
};

  return (
    <article className="flex flex-col my-3 border-4 border-black bg-amber-100">
      <h2>{offer.offer}</h2>
      <button className="border-2 border-black m-1" onClick={handleDelete}>
        Delete Offer
      </button>
    </article>
  );
}
