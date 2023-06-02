
import React, { useState } from "react";
import "./style.css";

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
      <div id="coin" className={result} key={+new Date()}>
        <div className="side-a">
          <h2>{result}</h2>
        </div>
        <div className="side-b">
          <h2>{result}</h2>
        </div>
      </div>
      <h1>Flip a coin</h1>
      <button id="btn" onClick={coinToss}>
        Coin Toss
      </button>
    </div>
  );
};

export default Flip;


