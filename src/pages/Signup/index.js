import React from "react";
import { useState } from "react";
import usersAPI from "../../utils/API/users";

import "./style.css";

export default function Signup(props) {
  const [name, setName] = useState("wiFDSAll");
  const [email, setEmail] = useState("will@wiFDSAll.will");
  const [password, setPassword] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("password");

  // const handleSubmit = async (event) => {
  //   try {
  //     event.preventDefault();
  //     const res = await userAPI.login(name, password);
  //     console.log(res);
  // props.setUserId(res.user.id);
  // props.setUsername(res.user.username);
  // props.setToken(res.token);
  // localStorage.setItem("token", res.token);
  //   } catch (err) {
  //     console.log(err);
  //     localStorage.removeItem("token");
  //   }
  // };

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
      }
      setEmail("");
      setName("");
      setPassword("");
      setConfirmPassword("");
    }
  };

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
