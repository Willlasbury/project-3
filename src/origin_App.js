import React from "react";
import { io } from "socket.io-client";

import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";



export default function App() {
  // return (
    // <BrowserRouter>
    // <NavBar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    const [time, setTime] = React.useState('fetching')  
    React.useEffect(()=>{
      const socket = io('http://localhost:3000')
      socket.on('connect', ()=>console.log(socket.id))
      socket.on('connect_error', ()=>{
        setTimeout(()=>socket.connect(),5000)
      })
     socket.on('time', (data)=>setTime(data))
     socket.on('disconnect',()=>setTime('server disconnected'))
   
   },[])
   return (
     <div className="App">
      <p>hello</p>
       {time}
     </div>

  );
}
