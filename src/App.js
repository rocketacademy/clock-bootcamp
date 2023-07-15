import React from "react";
import Clock from "./Clock.js";
import logo from "./logo.png";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock timeZone="Asia/Singapore" />
          <Clock timeZone="America/Los_Angeles" />
          <Clock timeZone="Europe/Budapest" />
        </header>
      </div>
    );
  }
}

export default App;
