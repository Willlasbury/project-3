import React, { useEffect } from "react";
import "../../index.css";
import Offer from "../../components/Offer";
import userAPI from "../../utils/API/users";

export default function Notification({ token, setOffers, offers }) {
    console.log("offers:", offers)
//   if (!offers[0]) {
//     return (
//         <main className="flex justify-center items-center">
//     <h3>No offers</h3>;
//     </main>
//     )
//   } else {
    return (
      <main className="flex flex-col justify-center items-center">
        {offers.map((offer) => {
            // return <h1>hello</h1>
         return <Offer key={offer.id} offer={offer} />
        })}
      </main>
    );
//   }

//   return (
//     <main className="flex justify-center items-center">
// <h3>No offers</h3>;
// </main>)
}
