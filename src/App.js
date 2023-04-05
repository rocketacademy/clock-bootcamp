import React from "react";
import logo from "./clock.png";
import "./App.css";
import Greeting from "./Components/Greeting";
import Clock from "./Components/Clock";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greeting firstName="Alayne" lastName="L" />
          <Clock timeZone="Asia/Singapore" />
          <Clock timeZone="Europe/London" />
          <Clock timeZone="Asia/Malaysia" />
        </header>
      </div>
    );
  }
}

export default App;
