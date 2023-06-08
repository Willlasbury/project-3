import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

export default function FreeItem ({token}) {
    const navigate = useNavigate()
  
    useEffect(()=>{
      if (!token){
        navigate('/login')
      }
  
    },[])
    return (
        <div className="flex flex-col items-center mt-20">
        <h1 className="nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium">Free Items</h1>
        </div>
    )
}