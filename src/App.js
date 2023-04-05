import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";

const timeZoneArray = ["America/New_York", "Europe/London", "Asia/Tokyo", "Asia/Singapore"];


class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Render date value that is stored in state */}
          {/* <Clock clockData={timeZoneArray} /> */}
          <Clock clockData={timeZoneArray} />
        </header>
      </div>
    );
  }
}

export default App;

