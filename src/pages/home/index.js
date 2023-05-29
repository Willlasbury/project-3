import React from "react";
import "./style.css";
// import userAPI from "../../utils/API/users";
import ChatForm from "../../components/Chat";
export default function Home () {
   // This code was used to check connection to the backend
   // userAPI.createUser('mike', 'password').then(data => console.log("data:", data))

   return <ChatForm />

}
