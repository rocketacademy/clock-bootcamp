import React from "react";
import logo from "./logo.png";
import "./App.css";
import WorldClock from "./WorldClock.js";

const timeZoneArray = [
  "Asia/Singapore",
  "Asia/Seoul",
  "Europe/London",
  "America/New_York",
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Render date value that is stored in state */}
          <WorldClock clockArray={timeZoneArray} />
        </header>
      </div>
    );
  }
}

export default App;
