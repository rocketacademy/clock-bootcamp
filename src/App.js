import React from "react";
import logo from "./logo.png";
import "./App.css";
// import Clock from "./Clock.js";
import WorldClock from "./WorldClock.js";
// import { Container, Row, Col } from "react-bootstrap/";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <WorldClock />
        </header>
      </div>
    );
  }
}

export default App;
