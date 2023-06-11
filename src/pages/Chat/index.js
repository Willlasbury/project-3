import React from "react";
import { useState, useEffect } from "react";

import ChatBody from "../../components/Chat/ChatBody";
import ChatFooter from "../../components/Chat/ChatFooter";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

const ChatPage = ({ socket, token }) => {
  const [messages, setMessages] = useState([]);
  if (socket) {

    socket.on("messageResponse", (data) => {
      setMessages([...messages, data]);
    });
    
    socket.emit("join-room", { id: "id", username: "hello", room: "room" });
    
    socket.on("joined", (data) => {
      console.log("joined data:", data);
    });
  }
  return (
    <>
      <ChatBody messages={messages} />
      <ChatFooter socket={socket} token={token} />
    </>
  );
};

export default ChatPage;
