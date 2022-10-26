import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Asia/Singapore:
            <Clock timeZone="Asia/Singapore" />
          </p>
          <p>
            Europe/London:
            <Clock timeZone="Europe/London" />
          </p>
          <p>
            America/Los_Angeles:
            <Clock timeZone="America/Los_Angeles" />
          </p>
        </header>
      </div>
    );
  }
}
export default App;
