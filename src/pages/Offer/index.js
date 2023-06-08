import React from "react";
import "../../index.css";
import { Link, useNavigate } from "react-router-dom";
import {useEffect} from "react"



export default function Offer({token}) {
  const navigate = useNavigate();
  useEffect(()=>{
    if (!token){
      navigate('/login')
    }
  },[])
    return (
    <div className="flex flex-col items-center mt-5">
    <h1 className="px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium"> Click on the Item that you would like to make an offer on</h1>
    <Link to={`/items`} className="item-link text-black">
      </Link>
    </div>
    );
}