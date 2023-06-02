import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export default function NavBar({ username }) {
  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/YourItems">Your Items</NavLink>
        <NavLink to="/category">Category</NavLink>
        <NavLink to="/freeitem">FreeItem</NavLink>
        <NavLink to="/lookingfor">LookingFor</NavLink>
        <NavLink to="/postitem">PostItem</NavLink>
        <NavLink to="/search">Search</NavLink>
      </ul>

      <h3>Hello: {username}</h3>
    </nav>
  );
}
