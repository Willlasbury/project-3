import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersAPI from "../../utils/API/users";

import "../../index.css";

export default function Signup(props) {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.match(/^(.*)@(.*)\.(.*)/)) {
      alert("Email not valid");
    } else if (!name) {
      alert("Name is required");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      const res = await usersAPI.signUp(name, password, email);
      if (res.err) {
        alert("Error: " + res.msg);
      } else {
        alert("Thank you for your submission");
        props.setUserId(res.user.id);
        props.setUsername(res.user.username);
        props.setToken(res.token);
        localStorage.setItem("token", res.token);
        setEmail("");
        setName("");
        setPassword("");
        setConfirmPassword("");
        navigate('/')
      }

      setEmail("");
      setName("");
      setPassword("");
      setConfirmPassword("");
  
    }
  };

  return (
    <form className="flex flex-col items-center mt-20">
      <div className="mb-3">
          <label for="Name" className="block mb-2 text-sm font-bold text-orange-900 dark:text-white"></label>
          <input type="text" id="default-input" className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          />
      </div>
      <div className="mb-3">
          <label for="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
          <input type="text" id="default-input" className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />
      </div>
      <div className="mb-3">
          <label for="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
          <input type="text" id="default-input" className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          />
      </div>
      <div className="mb-3">
          <label for="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
          <input type="text" id="default-input" className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          />
      </div>
            
            <button onClick={handleSubmit} className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-cyan-500 text-xl font-medium">Signup</button>
            
          </form>
  );
}

