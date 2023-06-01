import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import socketConnect from "./utils/socket/connection";

import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Category from "./pages/Category";
import FreeItem from "./pages/FreeItem"
import LookingFor from "./pages/LookingFor";
import PostItem from "./pages/PostItem"
import Items from "./pages/Items"
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Chat from "./pages/Chat"
import Search from "./pages/Search";
import Flip from "./pages/Flip";


export default function App () {
  
  // create socket connection at root level and pass it to all pages
    // you will call functions from utils/socket in pages to use the socket prop
  const socket = socketConnect()

  return (
    <section>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category" element={<Category />} />
        <Route path="/freeitem" element={<FreeItem />} />
        <Route path="/lookingfor" element={<LookingFor />} />
        <Route path="/postitem" element={<PostItem />} />
        <Route path="/chat" element={<Chat socket={socket}/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/items" element={<Items />} />
        <Route path="/flip" element={<Flip />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </section>
  )
}
