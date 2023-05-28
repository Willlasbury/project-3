import React from "react";
import { useState } from "react";

import "./style.css";


export default function Login () {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit () {
        
    }


   return (
   
    <form>
        <input name='name' placeholder="name" value={name} onChange={(event)=>setName(event.target.value)}/>
        <input name='password' placeholder="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
        <button onClick={handleSubmit}>submit</button>
    </form>
   )
}
