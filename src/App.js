import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";
import WorldClock from "./WorldClock.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WorldClock
            timeZones={[
              "America/Los_Angeles",
              "Europe/London",
              "Asia/Singapore",
            ]}
          />
        </header>
      </div>
    );
  }
}

export default App;
