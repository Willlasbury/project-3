import React from "react";
// import { useState } from "react";

import UploadWidget from "../../components/UploadWidget";


import "./style.css";


export default function PostItem() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-3 border-3 border-4 border-blue-950 rounded-lg shadow-lg bg-amber-100">Post Item</h1>
      
      <UploadWidget />
    </div>
  );
}

