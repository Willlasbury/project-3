import React from "react";
import { io } from "socket.io-client";

import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import socketConnect from "./utils/socket";



export default function App () {
  
  socketConnect()

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
