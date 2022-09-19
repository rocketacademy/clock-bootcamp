import React from "react";
import "./App.css";
import logo from "./logo.png";
import Clock from "./clock.js"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock timezone="Asia/Singapore" />
          <Clock timezone="America/Chicago" />
          <Clock timezone="Japan" />
        </header>
      </div>
    );
  }
}

export default App;
