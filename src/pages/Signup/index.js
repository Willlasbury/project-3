import React from "react";
import { useState } from "react";


import "./style.css";


export default function Signup () {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    
    
    function handleSubmit(event) {
        event.preventDefault();
      
        if (!email || !email.match(/^(.*)@(.*)\.(.*)/)) {
          alert("Email not valid");
        } else if (!name) {
          alert("Name is required");
        } else if (!password || password !== confirmPassword) {
          alert("Passwords do not match");
        } else {
          alert("Thank you for your submission");
          setEmail("");
          setName("");
          setPassword("");
          setConfirmPassword("");
        }
      }
      
      return (
        <form>
          <input
            name="name"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            name="confirm-password"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <button onClick={handleSubmit}>Signup</button>
        </form>
      );
      }
