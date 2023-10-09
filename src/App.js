import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* ParentComponent App passes this.prop.timeZone to the child component Clock and Clock can then render that prop's timeZone value*/}
          <Clock timeZone="Europe/London" />
          <Clock timeZone="America/Los_Angeles" />
          <Clock timeZone="Asia/Singapore" />
        </header>
      </div>
    );
  }
}

export default App;

// We declare a new Javascript date object {new Date().toString()} in the <p> tags and rendered as a string

// We add state which will store the date and time that we will update every second in this.state. We now have this.state.date to add new Date() to the JSX
