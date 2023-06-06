import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../index.css";

export default function LookingFor ({token}) {
    const navigate = useNavigate()
  
  useEffect(()=>{
    if (!token){
      navigate('/login')
    }

  },[])
    return (
        <h1>Looking for items</h1>
    )
}