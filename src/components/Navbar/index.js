import React from "react";
import { useEffect } from "react";
import "../../index.css";
import { NavLink, useNavigate } from "react-router-dom";

import offerAPI from "../../utils/API/offer";

export default function NavBar({
  userName,
  logout,
  messages,
  setOffers,
  offers,
  socket,
  token,
}) {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  useEffect(() => {
    if (socket) {
      socket.on("new_offer", async () => {
        const offers = await offerAPI.getRecievedOffers(token);
        setOffers(offers);
      });
    } else {
      offerAPI.getRecievedOffers(token).then((offers) => {
        setOffers(offers);
      });
    }
  }, [socket]);
  // offerAPI.getRecievedOffers(token)

  return (
    
    <nav className="w-full sticky top-0 z-10 bg-amber-950 border-b border-stone-400 ">
      <div
        className="flex flex-col items-center justify-center md:justify-between md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="nav nav-tabs flex flex-wrap justify-center m-4">
          <li className="m-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-3 border-4 border-black rounded-lg shadow-lg bg-amber-500 text-stone-900 text-xl font-bold"
                  : "px-3 border-4 border-amber-500 rounded-lg shadow-lg bg-amber-100 text-amber-950 text-xl font-semibold"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="m-1">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "px-3 border-4 border-black rounded-lg shadow-lg bg-amber-500 text-stone-900 text-xl font-bold"
                  : "px-3 border-4 border-amber-500 rounded-lg shadow-lg bg-amber-100 text-amber-950 text-xl font-semibold"
              }
            >
              Login
            </NavLink>
          </li>
          <li className="m-1">
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "px-3 border-4 border-black rounded-lg shadow-lg bg-amber-500 text-stone-900 text-xl font-bold"
                  : "px-3 border-4 border-amber-500 rounded-lg shadow-lg bg-amber-100 text-amber-950 text-xl font-semibold"
              }
            >
              Signup
            </NavLink>
          </li>
          <li className="m-1">
            <NavLink
              to="/YourItems"
              className={({ isActive }) =>
                isActive
                  ? "px-3 border-4 border-black rounded-lg shadow-lg bg-amber-500 text-stone-900 text-xl font-bold"
                  : "px-3 border-4 border-amber-500 rounded-lg shadow-lg bg-amber-100 text-amber-950 text-xl font-semibold"
              }
            >
              Your Items
            </NavLink>
          </li>
          {/* <li className="m-1">
            <NavLink
              to="/category"
              className={({ isActive }) =>
                isActive
                  ? "px-3 border-4 border-black rounded-lg shadow-lg bg-amber-500 text-stone-900 text-xl font-bold"
                  : "px-3 border-4 border-amber-500 rounded-lg shadow-lg bg-amber-100 text-amber-950 text-xl font-semibold"
              }
            >
              Category
            </NavLink>
          </li> */}
          {/* <li className="m-1">
            <NavLink
              to="/freeItem"
              className={({ isActive }) =>
                isActive
                  ? "px-3 border-4 border-black rounded-lg shadow-lg bg-amber-500 text-stone-900 text-xl font-bold"
                  : "px-3 border-4 border-amber-500 rounded-lg shadow-lg bg-amber-100 text-amber-950 text-xl font-semibold"
              }
            >
              Free Items
            </NavLink>
          </li> */}
          <li className="m-1">
            <NavLink
              to="/browse"
              className={({ isActive }) =>
                isActive
                  ? "px-3 border-4 border-black rounded-lg shadow-lg bg-amber-500 text-stone-900 text-xl font-bold"
                  : "px-3 border-4 border-amber-500 rounded-lg shadow-lg bg-amber-100 text-amber-950 text-xl font-semibold"
              }
            >
              Browse
            </NavLink>
          </li>
          <li className="m-1">
            <NavLink
              to="/postItem"
              className={({ isActive }) =>
                isActive
                  ? "px-3 border-4 border-black rounded-lg shadow-lg bg-amber-500 text-stone-900 text-xl font-bold"
                  : "px-3 border-4 border-amber-500 rounded-lg shadow-lg bg-amber-100 text-amber-950 text-xl font-semibold"
              }
            >
              Post Item
            </NavLink>
          </li>
          {/* <li className="m-1">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive
                  ? "px-3 border-4 border-black rounded-lg shadow-lg bg-amber-500 text-stone-900 text-xl font-bold"
                  : "px-3 border-4 border-amber-500 rounded-lg shadow-lg bg-amber-100 text-amber-950 text-xl font-semibold"
              }
            >
              Search
            </NavLink>
          </li> */}
          <li className="m-1">
            <NavLink
              to="/offer"
              className={({ isActive }) =>
                isActive
                  ? "px-3 border-4 border-black rounded-lg shadow-lg bg-amber-500 text-stone-900 text-xl font-bold"
                  : "px-3 border-4 border-amber-500 rounded-lg shadow-lg bg-amber-100 text-amber-950 text-xl font-semibold"
              }
            >
              Offer
            </NavLink>
          </li>

          {!token ? null : (
            <div className="flex">
              <button
                className="px-3 ml-1 border-4 border-amber-500 rounded-lg shadow-lg bg-amber-100 text-amber-950 text-xl font-semibold"
                onClick={handleLogout}
              >
                Logout
              </button>

              <li className="m-1">
            <NavLink
              to="/notification"
              className={({ isActive }) =>
                isActive
                  ? "px-3 border-4 border-black rounded-lg shadow-lg bg-amber-500 text-stone-900 text-xl font-bold"
                  : "px-3 border-4 border-amber-500 rounded-lg shadow-lg bg-amber-100 text-amber-950 text-xl font-semibold"
              }
            >
              Notifications: {offers.length}
            </NavLink>
          </li>
              {/* <h3 className="nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium">
                Notifications: {offers}
              </h3> */}
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}
