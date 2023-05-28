import React from "react";

import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NavBar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
