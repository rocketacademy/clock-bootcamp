import React from "react";
import logo from "./logo.png";
import "./App.css";
import Dropdown from "./Components/Dropdown";
import WorldClock from "./Components/WorldClock";
import Container from "react-bootstrap/Container";

const clockDropdownData = [
  "America/Los_Angeles",
  "Europe/London",
  "Asia/Singapore",
  "Asia/Kuala_Lumpur",
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clockData: [
        ["America/Los_Angeles", "0001"],
        ["Europe/London", "0002"],
        ["Asia/Singapore", "0003"],
        ["Asia/Qatar", "0004"],
      ],
    };

    this.addTimeZone = this.addTimeZone.bind(this);
    this.removeTimeZone = this.removeTimeZone.bind(this);
  }

  addTimeZone(newTimeZone) {
    const date = new Date();
    const newId = date.getTime().toString();
    const timeZoneToAdd = [newTimeZone, newId];
    this.setState({ clockData: [...this.state.clockData, timeZoneToAdd] });
  }

  removeTimeZone(id) {
    const newClockData = [];
    this.state.clockData.forEach((data) => {
      if (data[1] !== id) {
        newClockData.push(data);
      }
    });
    this.setState({ clockData: newClockData });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Container>
            <Dropdown
              clockData={clockDropdownData}
              addTimeZone={this.addTimeZone}
            />
            <WorldClock
              clockData={this.state.clockData}
              removeTimeZone={this.removeTimeZone}
            />
          </Container>
        </header>
      </div>
    );
  }
}
export default App;
