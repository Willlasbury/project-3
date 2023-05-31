import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = ({ messages }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
  
        <button onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
  

      {messages.map((message) =>
        message.name === localStorage.getItem("userName") ? (
          <div className="message__chats" key={message.id}>
            <div className="message__sender">
              <p>{message.text}</p>
            </div>
          </div>
        ) : (
          <div className="message__chats" key={message.id}>
            <p>{message.name}</p>
            <div className="message__recipient">
              <p>{message.text}</p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ChatBody;