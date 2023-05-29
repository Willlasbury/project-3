import React from 'react';
import './style.css'
import { useState } from 'react'

import socketConnect from '../../utils/socket'

export default function ChatForm () {
    const [chat, setChat] = useState();

    socketConnect()


    return (
        <form>
            <input name='chat' value={chat} onChange={(event)=>setChat(event.target.value)}/>
        </form>
    )
}