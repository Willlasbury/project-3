import React from "react";
import { useState } from "react";

import "./style.css";


export default function Signup () {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    // function handleSubmit () {
        
    // }
    
    function handleSubmit(event) {

        event.preventDefault();
    
        if (!email || !email.match(/^(.*)@(.*)\.(.*)/)) {
          alert("email not valid");
        } else {
            alert('thank you for your submission')
        }
        setEmail("");
        setName("");
        setPassword("");
      }

   return (
   
    <form>
        <input name='name' placeholder="name" value={name} onChange={(event)=>setName(event.target.value)}/>
        <input name='email' placeholder="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
        <input name='password' placeholder="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
        <input name='password' placeholder="re-enter password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
        <button onClick={handleSubmit}>Signup</button>
    </form>
   )
}