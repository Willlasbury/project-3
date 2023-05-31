import React from "react";
import "./style.css";


class Flip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      flip: "flip"
    };
    this.coinToss = this.coinToss.bind(this);
  }
  coinToss() {
    this.setState({ flip: "" }, () => {
      if (Math.random() < 0.5) {
        this.setState({ result: "heads" });
        console.log("heads");
      } else {
        this.setState({ result: "tails" });
        console.log("tails");
      }
    });
  }

  render() {
    return (
      <div className="Flip">
        <div id="coin" className={this.state.result} key={+new Date()}>
          <div class="side-a">
            <h2>TAILS</h2>
          </div>
          <div className="side-b">
            <h2>HEADS</h2>
          </div>
        </div>
        <h1>Flip a coin</h1>
        <button id="btn" onClick={this.coinToss}>
          Coin Toss
        </button>
      </div>
    );
  }
}

export default Flip;