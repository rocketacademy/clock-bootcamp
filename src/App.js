import React from "react";
import logo from "./clock.jpg";
import "./App.css";
import Clock from "./clock";

class App extends React.Component {
  // call clearInterval  tear down the tier

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Coordinated Universal Time</h1>
          {/* Render date value that is stored in state */}
          <Clock timeZone={"Asia/Singapore"} />
          <Clock timeZone={"UTC"} />
          {[1, 1, 1, 1, 1].map(() => (
            <Clock timeZone={"UTC"} />
          ))}
        </header>
      </div>
    );
  }
}
export default App;
