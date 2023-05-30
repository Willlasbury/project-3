import React from "react";
import "./style.css";

import ChatForm from "../../components/Chat";

import sayHi from "../../utils/socket/sayhi";

export default function Home({ socket }) {
  // This code was used to check that the socket connection worked and run a test emit
  sayHi(socket);

  function doMath(socket) {
    socket.emit("do-math");
  }

  doMath(socket);

  return <ChatForm />;
}
