import React from "react";

export default function Message({ message }) {
  return (
    <article className="flex flex-col my-3 border-4 border-black bg-amber-100">
      <h2>Messages</h2>
    <h2>{message.text}</h2>  

    </article>
  );
}
