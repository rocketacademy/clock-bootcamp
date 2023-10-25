import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "../src/Clock";

class App extends React.Component {
  Clock;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock timeZone="Europe/Stockholm" />
          <Clock timeZone="America/Los_Angeles" />
          <Clock timeZone="Asia/Singapore" />
        </header>
      </div>
    );
  }
}

export default App;
