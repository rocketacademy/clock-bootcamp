import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Components/Clock.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock
            location="America/Los Angeles"
            timeZone="America/Los_Angeles"
          />
          <Clock location="Europe/London" timeZone="Europe/London" />
          <Clock location="Asia/Singapore" timeZone="Asia/Singapore" />
        </header>
      </div>
    );
  }
}

export default App;
