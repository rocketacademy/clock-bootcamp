import React from "react";
import logo from "./logo.png";
import "./App.css";
import WorldClock from "./WorldClock.js";

const timeZoneArray = ["America/New_York", "Europe/London", "Asia/Tokyo"];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WorldClock clockData={timeZoneArray} />
        </header>
      </div>
    );
  }
}

export default App;
