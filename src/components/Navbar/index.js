import React from 'react'
import './style.css';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
  return (
    <nav class="m-4">
        <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/category'>Category</NavLink>
            <NavLink to='/freeitem'>FreeItem</NavLink>
            <NavLink to='/lookingfor'>LookingFor</NavLink>
            <NavLink to='/postitem'>PostItem</NavLink>
            <NavLink to='/search'>Search</NavLink>
        </ul>
    </nav>
  );
}


