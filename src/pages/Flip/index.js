import React, { useState } from "react";
import css from "./style.css";
import headsImage from "./heads.png";
import tailsImage from "./tails.png";


const Flip = () => {
  const [result, setResult] = useState("");
  const [flip, setFlip] = useState("flip");

  const coinToss = () => {
    setFlip("");
    if (Math.random() < 0.5) {
      setResult("heads");
    } else {
      setResult("tails");
    }
  };

  return (
    <div className="mt-5 flex flex-col items-center font-sans">
      <button
        id="flip-btn"
        className="nav-item m-4 px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium"
        onClick={coinToss}
      >
        Flip For It
      </button>
      <div className="coin-container">
        <div
          id="coin"
          className={`${
            result === "heads" ? "animate-flipHeads" : "animate-flipTails"
          } transition-transform duration-5000 ease-in-out`}
        >
          <div className="side">
            <img src={result === "heads" ? headsImage : tailsImage} alt={result} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flip;

