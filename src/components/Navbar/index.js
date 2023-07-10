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
    <nav className="flex justify-between w-full sticky top-0 z-10 bg-amber-950 border-stone-400 p-2">
      <ul className="nav nav-tabs flex flex-wrap justify-center">
        {!token ? (
          <>
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
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
      {token && (
        <ul className="flex">
          <button
            className="px-3 border-4 h-9 border-amber-500 rounded-lg shadow-lg bg-amber-100 text-amber-950 text-xl font-semibold"
            onClick={handleLogout}
          >
            Logout
          </button>
          <li className="m-1">
            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                isActive
                  ? "px-3 border-4 border-black rounded-lg shadow-lg bg-amber-500 text-stone-900 text-xl font-bold"
                  : "px-3 border-4 border-amber-500 rounded-lg shadow-lg bg-amber-100 text-amber-950 text-xl font-semibold"
              }
            >
              Notifications
            </NavLink>
          </li>
          <li className="m-1 border-4 border-amber-500 rounded-lg shadow-lg bg-amber-100 text-amber-950 text-xl font-semibold">
            Hello, {userName}
          </li>
        </ul>
      )}
    </nav>
  );
}
