// App.js
import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./clock.js"; // Import the Clock component

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock label="Singapore Time" timeZone="Asia/Singapore" />
          <Clock label="London Time" timeZone="Europe/London" />
          <Clock label="Los Angeles Time" timeZone="America/Los_Angeles" />
          <Clock label="New Zealand/Auckland Time" timeZone="Pacific/Auckland" />
        </header>
      </div>
    );
  }
}

export default App;
