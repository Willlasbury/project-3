import React from "react";
import "../../index.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function NavBar({ username, logout, messages }) {
  const navigate = useNavigate();


  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    
<nav className="fixed w-full top-0 z-30 bg-orange-900 border-b border-stone-400 ">
  <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="nav nav-tabs flex flex-grow justify-center m-4 ">
      <li className='nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-cyan-500 text-xl font-medium'>
      <NavLink to="/">Home</NavLink>
      </li>
      <li className='nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-cyan-500 text-xl font-medium'>
      <NavLink to="/login">Login</NavLink>
      </li>
      <li className='nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-cyan-500 text-xl font-medium'>
      <NavLink to="/signup">Signup</NavLink>
      </li>
      <li className='nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-cyan-500 text-xl font-medium'>
      <NavLink to="/YourItems">Your Items</NavLink>
      </li>
      <li className='nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-cyan-500 text-xl font-medium'>
      <NavLink to="/category">Category</NavLink>
      </li>
      <li className='nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-cyan-500 text-xl font-medium'>
      <NavLink to="/freeitem">FreeItem</NavLink>
      </li>
      <li className='nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-cyan-500 text-xl font-medium'>
      <NavLink to="/browse">Browse</NavLink>
      </li>
      <li className='nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-cyan-500 text-xl font-medium'>
      <NavLink to="/postitem">PostItem</NavLink>
      </li>
      <li className='nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-cyan-500 text-xl font-medium'>
      <NavLink to="/search">Search</NavLink>
      </li>
      <button className='nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-cyan-500 text-xl font-medium' onClick={handleLogout}>Logout</button>
      <h3>Notifications: {messages}</h3>
    </ul>
  </div>
  {/* </div> */}
</nav>

  );
}

// className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4"
// main class flex-grow    should make it fit in between but doesn't
{/* <nav className="flex flex-grow justify-center px-5 m-4">
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
