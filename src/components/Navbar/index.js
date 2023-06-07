import React from "react";
import { useEffect } from "react";
import "../../index.css";
import { NavLink, useNavigate } from "react-router-dom";

import userAPI from "../../utils/API/users";

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
        const offers = await userAPI.getOffers(token);
        setOffers(offers.length);
      });
    } else {
      userAPI.getOffers(token).then((offers) => {
        setOffers(offers.length);
      });
    }
  }, [socket]);
  // userAPI.getOffers(token)

  return (
    // not active: hover:font-bold hover:bg-amber-500 hover:text-stone-900
    // active: nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium

    <nav className="fixed w-full top-0 z-30 bg-amber-950 border-b border-stone-400 ">
      <div
        className="items-center  justify-between w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="nav nav-tabs flex flex-grow justify-center m-4">
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
          <li className="m-1">
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
          </li>
          <li className="m-1">
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
          </li>
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
          <li className="m-1">
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
          </li>
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
                className="nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium"
                onClick={handleLogout}
              >
                Logout
              </button>
              <h3 className="nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium">
                Notifications: {offers}
              </h3>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}

// className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4"
// main class flex-grow    should make it fit in between but doesn't
{
  /* <nav className="flex flex-grow justify-center px-5 m-4">
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/YourItems">Your Items</NavLink>
        <NavLink to="/category">Category</NavLink>
        <NavLink to="/freeitem">FreeItem</NavLink>
        <NavLink to="/browse">Browse</NavLink>
        <NavLink to="/postitem">PostItem</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/signup">signup</NavLink>
        <button onClick={handleLogout}>Logout</button>
      </ul>

      <h3>Hello: {userName}</h3>
    </nav> */
}
