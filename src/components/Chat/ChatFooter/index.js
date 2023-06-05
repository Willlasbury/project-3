import React, { useState } from 'react';
import sendMessage from '../../../utils/socket/sendMessage';
const ChatFooter = ({socket, token}) => {
  const [message, setMessage] = useState('');

  console.log("token:", token)
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("message", {
        text: message,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        token: token
      });
    }
    setMessage("");
  };

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;