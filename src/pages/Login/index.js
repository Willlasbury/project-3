import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userAPI from "../../utils/API/users";

// import "../../index.css";

export default function Login(props) {
  const navigate = useNavigate();
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

      props.socket.emit("add_user", res.token);

      navigate("/");
    } catch (err) {
      console.log(err);
      localStorage.removeItem("token");
    }
  };

  return (
    <form className="flex flex-col items-center mt-20">
      <div className="mb-3">
        <label
          for="Name"
          className="block mb-2 text-sm font-medium text-gray-900 
        dark:text-white"
        ></label>
        <input
          type="text"
          id="default-input"
          className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label
          for="Password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ></label>
        <input
          type="text"
          id="default-input"
          className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 text-xl font-medium"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-cyan-500 text-xl font-medium"
      >
        Login
      </button>
    </form>
  );
}
