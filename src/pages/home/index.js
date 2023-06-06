import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import "../../index.css";
import { Image } from "cloudinary-react";


export default function Home({ socket, token }) {
  const navigate = useNavigate()
  
  useEffect(()=>{
    if (!token){
      navigate('/login')
    }

  },[])

  return (
    <div>
      
      <h1>Testing</h1>
      
      
      <Image
        cloud_name="dlnloe77d"
        publicId="https://res.cloudinary.com/dlnloe77d/image/upload/v1685566909/do8i3sflcvyhd655u2mt.png"
        width="200"
      />
    </div>
  );
}
