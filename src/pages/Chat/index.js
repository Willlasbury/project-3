import React from 'react';
import { useState, useEffect } from 'react';

import ChatBody from '../../components/Chat/ChatBody';
import ChatFooter from '../../components/Chat/ChatFooter';

const ChatPage = ({ socket }) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('messageResponse', (data) => setMessages([...messages, data]));
      }, [socket, messages]);
    
  return (
    <>
    
        <ChatBody messages={messages}/>
        <ChatFooter socket={socket}/>
      
    </>
  );
};

export default ChatPage;