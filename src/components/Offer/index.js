import React, { useEffect, useState } from "react";
import userAPI from "../../utils/API/users";
export default function Offer({ offer, socket }) {
  const [offerer, setOfferer] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await userAPI.getUserId(offer.offerer_id);
        setOfferer(fetchedUser);
      } catch (error) {
        console.log("Error fetching items:", error);
      }
    };

    fetchUser();
  }, []);

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
  console.log("offer:", offer);
  return (
    <article className="flex flex-col my-3 border-4 border-black bg-amber-100">
      <h2 className="text-xl font-medium">Offer For: {offer.Item.title}</h2>
      <h2 className="text-xl font-medium">Offer From: {offerer.userName}</h2>
      <h2 className="text-xl font-medium">
        Proposed Trade Item: {offer.offerItem}
      </h2>
      <p className="underline">Proposed Offer Text:</p>
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
