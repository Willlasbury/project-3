import React from "react";
export default function Offer({ offer }) {
  const handleAccept = (event) => {
    event.preventDefault();
  };

  const handleDecline = (event) => {
    event.preventDefault();
  };

  return (
    <article className="flex flex-col my-3 border-4 border-black bg-amber-100">
      <h2>{offer.offer}</h2>
      <button className="border-2 border-black m-1" onClick={handleAccept}>
        Accept
      </button>
      <button className="border-2 border-black m-1" onClick={handleDecline}>
        Decline
      </button>
    </article>
  );
}
