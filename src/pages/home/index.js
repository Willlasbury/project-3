import React from "react";
import "./style.css";
import { Image } from "cloudinary-react";

import ChatForm from "../../components/Chat";

import sayHi from "../../utils/socket/sayhi";

export default function Home({ socket }) {
  // This code was used to check that the socket connection worked and run a test emit
  sayHi(socket);

  function doMath(socket) {
    socket.emit("do-math");
  }

  doMath(socket);

  return (
    <>
      <h1>Testing</h1>
      <Image
        cloud_name="dlnloe77d"
        publicId="https://res.cloudinary.com/dlnloe77d/image/upload/v1685566909/do8i3sflcvyhd655u2mt.png"
        width="200"
      />
      <ChatForm />
    </>
  );
}
