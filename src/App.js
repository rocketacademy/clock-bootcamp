import React from "react";
import logo from "./logo.png";
import "./App.css";
import WorldClock from "./Components/WorldClock";

const clockData = [
  "America/Los_Angeles",
  "Europe/London",
  "Asia/Singapore",
  "Asia/Qatar",
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WorldClock clockData={clockData} />
        </header>
      </div>
    );
  }
}
export default App;
