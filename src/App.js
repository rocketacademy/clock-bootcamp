import React from "react";
import logo from "./logo.png";
import "./App.css";
import WorldClock from "./Components/WorldClock";
import { Button } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTimezoneDisplay: true,
    };
  }

  toggleClock = () => {
    this.setState({
      isTimezoneDisplay: !this.state.isTimezoneDisplay,
    });
  };
  render() {
    const clockData = ["Europe/Zurich", "Canada/Yukon", "Asia/Singapore"];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p class="create-space"></p>
          <Button variant="primary" onClick={this.toggleClock}>
            Toggle Timezones
          </Button>
          <p class="create-space"></p>

          {this.state.isTimezoneDisplay ? (
            <WorldClock clockData={[...clockData]} />
          ) : (
            <p>Time Zones Removed</p>
          )}
        </header>
      </div>
    );
  }
}

export default App;
