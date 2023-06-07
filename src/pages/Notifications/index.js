import React, { useEffect } from "react";
import "../../index.css";
import Offer from "../../components/Offer";
import userAPI from "../../utils/API/users";

export default function Notification({ token, setOffers, offers, socket }) {

    return (
      <main className="flex flex-col justify-center items-center">
        <section>
            <h2>Recieved Offers</h2>
        {offers.map((offer) => {
            console.log("offer:", offer)
         return <Offer key={offer.id} offer={offer} socket={socket} />
        })}
        </section>
        <section>
            <h2>Your Offers</h2>

        </section>
      </main>
    );
}
