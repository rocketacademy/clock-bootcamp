import React from "react";
import logo from "./logo.png";
import "./App.css";
import WorldClock from "./WorldClock.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showClock: false,
    };
  }

  toggleClock = () => {
    this.setState({
      showClock: !this.state.showClock,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <button onClick={() => this.toggleClock()}>Show or hide clock</button>
          <br />
          {this.state.showClock ? (
            <WorldClock
              timezones={[
                "Asia/Hong_Kong",
                "Europe/Berlin",
                "America/New_York",
              ]}
            />
          ) : (
            "Press the button above to show the clock!"
          )}
        </header>
      </div>
    );
  }
}

export default App;
