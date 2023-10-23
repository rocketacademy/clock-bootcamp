import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import logo from "./logo.png";
import "./App.css";
import WorldClock from "./WorldClock";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WorldClock
            clockData={[
              "America/Los_Angeles",
              "Europe/London",
              "Asia/Singapore",
            ]}
          />
          {/* Render date value that is stored in state */}
        </header>
      </div>
    );
  }
}

export default App;
