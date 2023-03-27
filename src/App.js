import React from "react";
import "./App.css";
import Clock from "./Components/Clock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <div>
        <h1>World Clock</h1>
        <div className="clockWall">
          <Clock />
          <Clock zoneName="NYC" hourDiff="-4" />
          <Clock zoneName="LDN" hourDiff="1" />
          <Clock zoneName="IND" hourDiff="5" minDiff="30" />
        </div>
      </div>
    );
  }
}

export default App;
