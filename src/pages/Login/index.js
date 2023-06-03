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
    <form>
      <input
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
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
}
