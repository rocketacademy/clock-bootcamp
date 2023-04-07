import React from "react";
import logo from "./logo.png";
import "./App.css";
import WorldClock from "./WorldClock.js";

class App extends React.Component {
  render() {
    return (
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <WorldClock clockData={["Europe/London","America/Los_Angeles","Asia/Singapore"]}/>
      </header>
    );
  }
}

export default App;
