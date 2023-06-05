import React from "react";
import "../../index.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function NavBar({ username, logout }) {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <nav className="bg-blue-500 dark:bg-blue-300 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="nav nav-tabs flex flex-grow justify-center m-4 ">
            <li className="nav-item px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl">
              <NavLink to="/YourItems">Your Items</NavLink>
            </li>
            <li className="nav-item px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl">
              <NavLink to="/category">Category</NavLink>
            </li>
            <li className="nav-item px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl">
              <NavLink to="/freeitem">FreeItem</NavLink>
            </li>
            <li className="nav-item px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl">
              <NavLink to="/browse">Browse</NavLink>
            </li>
            <li className="nav-item px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl">
              <NavLink to="/postitem">PostItem</NavLink>
            </li>
            <li className="nav-item px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl">
              <NavLink to="/search">Search</NavLink>
            </li>
            <li className="nav-item px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl">
              <NavLink to="/login">login</NavLink>
            </li>
            <li className="nav-item px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl">
              <NavLink to="/signup">signup</NavLink>
            </li>
            <button
              className="nav-item px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl"
              onClick={handleLogout}
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

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

      <h3>Hello: {username}</h3>
    </nav> */
}
