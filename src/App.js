import React from "react";
import logo from "./logo.png";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{new Date().toString()}</p>
        </header>
      </div>
    );
  }
}

export default App;
