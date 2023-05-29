import React from "react";
import "./style.css";

import socketConnect from "../../utils/socket";
import ChatForm from "../../components/Chat";


export default function Home (props) {
   // This code was used to check connection to the backend
   // socketConnect()
   // console.log("props.socket:", props.socket.id)
   return <ChatForm />

}
