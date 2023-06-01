import React from "react";
import { useState } from "react";
import userAPI from "../../utils/API/users";

import "./style.css";

export default function Login(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const res = await userAPI.login(name, password);
      console.log(res);
      props.setUserId(res.user.id);
      props.setUsername(res.user.username);
      props.setToken(res.token);
      localStorage.setItem("token", res.token);
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
