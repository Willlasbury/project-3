import React, { useEffect } from "react";
import "../../index.css";
import Offer from "../../components/Offer";
import YourOffers from "../../components/YourOffers";
import offerAPI from "../../utils/API/offer";

export default function Notification({ token, yourOffers, offers, socket }) {
  return (
    <main className="flex flex-row justify-center items-start mt-5">
      <section className="flex flex-col border-2 border-black mx-auto p-4 max-w-sm border-stone-950 bg-amber-400 rounded-lg shadow-lg text-center">
        <h2 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-bold">
          Recieved Offers
        </h2>
        {offers.map((offer) => {
          return <Offer key={offer.id} offer={offer} socket={socket} />;
        })}
      </section>
      <section className="flex flex-col border-2 border-black card mx-auto p-4 max-w-sm border-stone-950 bg-amber-400 rounded-lg shadow-lg text-center">
        <h2 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-bold">
          Your Offers
        </h2>
        {yourOffers.map((offer) => {
          return <YourOffers key={offer.id} offer={offer} socket={socket} />;
        })}
      </section>
    </main>
  );
}
