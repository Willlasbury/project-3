import React from "react";

import socketConnect from "./utils/socket/connection";

import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

export default function App () {
  
  // create socket connection at root level and pass it to all pages
    // you will call functions from utils/socket in pages to use the socket prop
  const socket = socketConnect()

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home socket={socket}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
