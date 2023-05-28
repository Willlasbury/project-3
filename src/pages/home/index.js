import React from "react";
import "./style.css";
import userAPI from "../../utils/API/users";

export default function Home () {
   userAPI.createUser('bill', 'password').then(data => {
    console.log("data:", data)
   })

}
