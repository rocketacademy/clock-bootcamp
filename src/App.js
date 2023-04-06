import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./clock.js";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{"World Clock"}</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Clock/>
        </header>
      </div>
    );
  }
}

export default App;
