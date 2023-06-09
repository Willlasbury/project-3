import React from "react";
export default function Offer({ offer, socket }) {

  const handleAccept = (event) => {
    event.preventDefault();
    socket.emit("accept_offer", { offer });
  };

  const handleDecline = (event) => {
    event.preventDefault();
    socket.emit("decline_offer", { offer });
  };


  socket.on("accept_res", (data) => {
    window.location.reload();
  });
  
  socket.on("decline_res", (data) => {
    window.location.reload();
  });
  return (
    <article className="flex flex-col my-3 border-4 border-black bg-amber-100">
      <h2 className="text-xl font-medium">Offer for: {offer.Item.title}</h2>
      <h2 className="text-xl font-medium">
        Proposed Trade Item: {offer.offerItem}
      </h2>
      <p className="underline">Offer Text:</p>
      <p>{offer.offerText}</p>
      <button
        className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium m-1"
        onClick={handleAccept}
      >
        Accept
      </button>
      <button
        className="item-link px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium m-1"
        onClick={handleDecline}
      >
        Decline
      </button>
    </article>
  );
}
