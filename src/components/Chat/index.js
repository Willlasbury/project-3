import React from 'react';
import './style.css'
import { useState } from 'react'

import socketConnect from '../../utils/socket/connection'

export default function ChatForm () {
    const [chat, setChat] = useState();

    // const connection = socketConnect()


    return (
        <form>
            <input name='chat' value={chat} onChange={(event)=>setChat(event.target.value)}/>
        </form>
    )
}