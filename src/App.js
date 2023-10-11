import React from "react";
import logo from "./logo.png";
import "./App.css";

import WorldClock from "./WorldClock";

class App extends React.Component {
  render() {
    const clockData = [
      "Europe/Athens",
      "America/Los_Angeles",
      "Asia/Singapore",
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* ParentComponent App passes this.prop.timeZone to the child component Clock and Clock can then render that prop's timeZone value*/}
          <WorldClock clockData={clockData} />
        </header>
      </div>
    );
  }
}

export default App;

// We declare a new Javascript date object {new Date().toString()} in the <p> tags and rendered as a string

// We add state which will store the date and time that we will update every second in this.state. We now have this.state.date to add new Date() to the JSX
