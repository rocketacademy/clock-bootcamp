import React from "react";
import "./App.css";
import logo from "./logo.png";
import Clock from "./Clock.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Singapore: {<Clock timeZone="Asia/Singapore" />}</p>
          <p>USA(EST): {<Clock timeZone="US/Eastern" />}</p>
          <p>GMT+0: {<Clock timeZone="GMT" />}</p>
          <p>USA(PST): {<Clock timeZone="US/Pacific" />}</p>
        </header>
      </div>
    );
  }
}

export default App;
