import React, { useEffect } from "react";
import "../../index.css";
import Offer from "../../components/RecievedOffers";
import YourOffers from "../../components/YourOffers";
import Message from "../../components/Message"

export default function Notification({ token, yourOffers, offers, socket, messages }) {
  // get messages
  return (
    <main className="flex flex-row justify-center items-start mt-5">
      <section className="flex flex-col border-2 mx-auto p-4 max-w-sm border-stone-950 bg-amber-100 rounded-lg shadow-lg text-center">
        <h2 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-bold">
          Recieved Offers
        </h2>
        {offers.map((offer) => {
          return (
            <Offer
              key={offer.id}
              offer={offer}
              socket={socket}
            />
          );
        })}
      </section>
      <section className="flex flex-col border-2 card mx-auto p-4 max-w-sm border-stone-950 bg-amber-100 rounded-lg shadow-lg text-center">
        <h2 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-bold">
          Your Offers
        </h2>
        {yourOffers.map((offer) => {
          return <YourOffers key={offer.id} offer={offer} socket={socket} />;
        })}
      </section>
      <section className="flex flex-col border-2 card mx-auto p-4 max-w-sm border-stone-950 bg-amber-100 rounded-lg shadow-lg text-center">
      <h2 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-bold">
          Accepted Offers
        </h2>
        {messages && messages.map(message => {
          return <Message message={message} />
        })}

      </section>
    </main>
  );
}
