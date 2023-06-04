import React from "react";
import { useEffect, useState } from "react";

import socketConnect from "./utils/socket/connection";
import userAPI from "./utils/API/users";

import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Category from "./pages/Category";
import FreeItem from "./pages/FreeItem";
import LookingFor from "./pages/LookingFor";
import PostItem from "./pages/PostItem";
import Item from "./pages/Item prop";
import Browse from "./pages/Browse";
import Items from "./pages/Items";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Chat from "./pages/Chat";
import Search from "./pages/Search";
import Flip from "./pages/Flip";
import YourItems from "./pages/YourItems";
import "./index.css";

export default function App() {
  // create socket connection at root level and pass it to all pages
  // you will call functions from utils/socket in pages to use the socket prop
  const socket = socketConnect();

  const [userId, setUserId] = useState(-1);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    try {
      if (token) {
        userAPI.verifyToken(token).then((data) => {
          if (data.msg === "bad token") {
            localStorage.removeItem("token");
            setToken(null);
          } else {
            setUserId(data.id);
            setUsername(data.username);
          }
        });
      }
    } catch (err) {
      console.log("oh noes");
      console.log(err);
      //  logout();
    }
  }, [userId]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUsername(null);
    setUserId(0);
  };

  return (
    <section className="flex flex-col h-screen">
      <BrowserRouter>
        <NavBar username={username} logout={logout} />
        <Routes>
          <Route path="/" element={<Home token={token} />} />
          <Route
            path="/login"
            element={
              <Login
                setUserId={setUserId}
                setUsername={setUsername}
                setToken={setToken}
                userId={userId}
                username={username}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup
                setUserId={setUserId}
                setUsername={setUsername}
                setToken={setToken}
                userId={userId}
                username={username}
              />
            }
          />
          <Route path="/yourItems" element={<YourItems />} />
          <Route path="/category" element={<Category />} />
          <Route path="/freeitem" element={<FreeItem />} />
          <Route path="/lookingfor" element={<LookingFor />} />
          <Route path="/postitem" element={<PostItem />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/item" element={<Items />} />
          <Route path="/chat" element={<Chat socket={socket} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/items" element={<Items />} />
          <Route path="/flip" element={<Flip />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
}
