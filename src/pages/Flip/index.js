import React, { useState } from "react";

import headsImage from "./heads.jpg";
import tailsImage from "./tails.jpg";

const Flip = () => {
  const [result, setResult] = useState("");
  const [flip, setFlip] = useState("flip");

  const coinToss = () => {
    setFlip("");
    if (Math.random() < 0.5) {
      setResult("heads");
      console.log("heads")
    } else {
      setResult("tails");
      console.log("tails");
    }
  };

  return (
    <div className="flex flex-col items-center font-sans">
      <button
        id="flip-btn"
        className="nav-item px-3 border-4 border-stone-950 rounded-lg shadow-lg bg-amber-100 hover:font-bold hover:bg-amber-500 hover:text-stone-900 text-xl font-medium"
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
//   return (
//     <div className="Flip">
//       <button id="flip-btn" onClick={coinToss}>
//         Flip For It
//       </button>
//       <div id="coin" className={result} key={+new Date()}>
//         <div className="side-a">
//           <img
//             src={result === "heads" ? headsImage : tailsImage}
//             alt={result}
//           />
//         </div>
//         <div className="side-b">
//           <img
//             src={result === "heads" ? headsImage : tailsImage}
//             alt={result}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Flip;
