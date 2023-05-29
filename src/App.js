import React from "react";

import socketConnect from "./utils/socket";

import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

export default function App () {
  
  socketConnect()

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
