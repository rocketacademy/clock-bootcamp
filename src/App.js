import React from "react";
import logo from "./logo.png";
import "./App.css";
import WorldClock from "./Components/WorldClock.js";
import { Dropdown } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.timeZoneArray = Intl.supportedValuesOf("timeZone");
    this.state = {
      selectedTimeZones: [
        "Asia/Singapore",
        "Europe/London",
        "America/New_York",
      ],
    };
  }

  addNewTimeZone = (eventKey) => {
    if (!this.state.selectedTimeZones.includes(eventKey)) {
      this.setState({
        selectedTimeZones: this.state.selectedTimeZones.concat(eventKey),
      });
    } else {
      alert(`Time zone ${eventKey} already added.\nChoose another time zone!`);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          WORLD CLOCK
          <Dropdown onSelect={this.addNewTimeZone}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Add a time zone!
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.timeZoneArray.map((timeZone) => (
                <Dropdown.Item eventKey={timeZone} key={timeZone}>
                  {timeZone}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <br />
          <WorldClock clockData={this.state.selectedTimeZones} />
        </header>
      </div>
    );
  }
}

export default App;
