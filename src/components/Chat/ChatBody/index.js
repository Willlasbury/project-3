import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = ({ messages }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <>
  
        <button onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
  

      {messages.map((message) =>
       (
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
