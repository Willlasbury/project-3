import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userAPI from "../../utils/API/users";

import "./style.css";

export default function Login(props) {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const res = await userAPI.login(name, password);
      props.setUserId(res.user.id);
      props.setUsername(res.user.username);
      props.setToken(res.token);
      localStorage.setItem("token", res.token);
      localStorage.setItem("tokenId", res.user.id);
      navigate('/')
    } catch (err) {
      console.log(err);
      localStorage.removeItem("token");
    }
  };

  return (
    <form className="flex flex-col items-center">
      <div class="mb-3">
        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
        <input type="text" id="default-input" class="px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 "
        placeholder="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      </div>
      <div class="mb-3">
        <label for="Password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="text" id="default-input" class="px-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 "
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
    </div> 
      <button onClick={handleSubmit} className="px-3 border-4 border-blue-950 rounded-lg shadow-lg bg-stone-300 hover:font-bold hover:bg-orange-200 text-xl font-medium">Login</button>
      {/* <input
        name="name"
        placeholder="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        name="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleSubmit}>submit</button> */}
    </form>
  );
}
