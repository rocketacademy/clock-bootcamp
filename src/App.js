import React from "react";
import logo from "./logo.png";
import "./App.css";
// import Clock from "./components/clock";
import WorldClock from "./components/worldclock";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Clock timeZone="Europe/London"/>  */}
          <WorldClock clockData={["America/Los_Angeles", "Europe/London", "Asia/Singapore"]}/>
        </header>
      </div>
    );
  }
}

export default App;
