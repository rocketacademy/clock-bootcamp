import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Components/Clock";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Render date value that is stored in state */}
          <p>
            <Clock timeZone="Asia/Singapore" />
          </p>
          <p>
            <Clock timeZone="Australia/Sydney" />
          </p>
          <p>
            <Clock timeZone="Europe/London" />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
