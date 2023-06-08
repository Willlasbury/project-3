import React from "react";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react"

import UploadWidget from "../../components/UploadWidget";


import "./style.css";


export default function PostItem({token}) {
  const navigate = useNavigate();
  useEffect(()=>{
    if (!token){
      navigate('/login')
    }
  },[])
  return (
    <div className="flex flex-col items-center mt-40">
      <h1 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium">Post Item</h1>
      
      <UploadWidget />
    </div>
  );
}

