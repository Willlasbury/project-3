import React, { useEffect } from "react";
import "../../index.css";
import Offer from "../../components/Offer";
import YourOffers from "../../components/YourOffers";
import offerAPI from "../../utils/API/offer";

export default function Notification({ token, yourOffers, offers, socket }) {

  return (
    <main className="flex flex-row justify-center items-start">
      <section className="flex flex-col border-2 border-black m-2">
        <h2>Recieved Offers</h2>
        {offers.map((offer) => {
          return <Offer key={offer.id} offer={offer} socket={socket} />;
        })}
      </section>
      <section className="flex flex-col border-2 border-black m-2">
        <h2>Your Offers</h2>
            {yourOffers.map((offer) => {
          return <YourOffers key={offer.id} offer={offer} socket={socket} />;
        })}
      </section>
    </main>
  );
}
