import React from "react";
import logo from "./logo.png";
import "./App.css";
import WorldClock from "./WorldClock.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WorldClock />
        </header>
      </div>
    );
  }
}

export default App;
