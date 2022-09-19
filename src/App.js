import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock";

const timezones = ["Asia/Singapore", "America/Los_Angeles", "Europe/London"];

const allTimezones = timezones.map((timezone) => <Clock timezone={timezone} />);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <thead>
            <tr>
              <th>City</th>
              <th>Clock</th>
            </tr>
          </thead>
          {allTimezones}
        </header>
      </div>
    );
  }
}

export default App;
