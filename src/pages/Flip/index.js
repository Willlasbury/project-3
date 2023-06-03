
import React, { useState } from "react";
import "./style.css";
import headsImage from "./heads.jpg";
import tailsImage from "./tails.jpg";

const Flip = () => {
  const [result, setResult] = useState("");
  const [flip, setFlip] = useState("flip");

  const coinToss = () => {
    setFlip("");
    if (Math.random() < 0.5) {
      setResult("heads");
      console.log("heads");
    } else {
      setResult("tails");
      console.log("tails");
    }
  };

  return (
    <div className="Flip">
        <button id="btn" onClick={coinToss}>
        Flip For It</button>
      <div id="coin" className={result} key={+new Date()}>
        <div className="side-a">
          <img src={result === "heads" ? headsImage : tailsImage} alt={result} />
        </div>
        <div className="side-b">
          <img src={result === "heads" ? headsImage : tailsImage} alt={result} />
        </div>
      </div>
      
    
    </div>
  );
};

export default Flip;


