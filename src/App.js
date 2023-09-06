import React from "react";
import logo from "./logo.png";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import WorldClock from "./WorldClock.js";

class App extends React.Component {
  render() {
    const timeZones = ['Asia/Singapore', 'America/Los_Angeles', 'Europe/London'];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WorldClock clockData = {timeZones}/>
        </header>
      </div>
    );
  }
}

export default App;
