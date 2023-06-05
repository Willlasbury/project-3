import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersAPI from "../../utils/API/users";

import "../../index.css";

export default function Signup(props) {
  const navigate = useNavigate()
  const [name, setName] = useState("wiFDSAll");
  const [email, setEmail] = useState("will@wiFDSAll.will");
  const [password, setPassword] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("password");


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
    <form className="flex flex-col items-center">
      {/* <div class="mb-3">
    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label>
    <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div> */}
<div class="mb-3">
    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" id="default-input" class="px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 "
    placeholder="Name"
    value={name}
    onChange={(event) => setName(event.target.value)}
    />
</div>
<div class="mb-3">
    <label for="Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="text" id="default-input" class="px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 "
    placeholder="email"
    value={email}
    onChange={(event) => setEmail(event.target.value)}
    />
</div>
<div class="mb-3">
    <label for="Password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input type="text" id="default-input" class="px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 "
    placeholder="Password"
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    />
</div>
<div class="mb-3">
    <label for="Password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input type="text" id="default-input" class="px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 "
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(event) => setConfirmPassword(event.target.value)}
    />
</div>
      
      <button onClick={handleSubmit} className="px-3 border-4 border-blue-950 rounded-lg shadow-lg bg-stone-300 hover:font-bold hover:bg-orange-200 text-xl font-medium">Signup</button>
      
    </form>
  );
}

{/* <input
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
      /> */}
