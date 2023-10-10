import React from "react";
import logo from "./logo.png";
import "./App.css";
import WorldClock from "./WorldClock";

class App extends React.Component {
  render() {
    const clockData = ["Europe/Zurich", "Canada/Yukon", "Asia/Singapore"];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WorldClock clockData={[...clockData]} />
        </header>
      </div>
    );
  }
}

export default App;
