import React from "react";
import "./App.css";
import Clock from "./Components/Clock";
import { DateTime } from "luxon";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clocks: [
        <Clock timeZone="Asia/Singapore" />,
        <Clock timeZone="America/New_York" />,
        <Clock timeZone="Europe/London" />,
        <Clock timeZone="Asia/Tehran" />,
      ],
      value: "",
    };
  }

  addClock = (ianaCode) => {
    this.setState({
      clocks: [<Clock timeZone={ianaCode} />, ...this.state.clocks],
    });
    console.log(this.state.clocks);
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    if (DateTime.now().setZone(this.state.value).isValid) {
      this.addClock(this.state.value);
      this.setState({
        value: "",
      });
    } else {
      this.setState({
        value: "Invalid Input!",
      });
    }
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="header">
          <h1>World Clock</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                value={this.state.value}
                placeholder="Input TZ Identifier"
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value=" + " />
          </form>
        </div>
        <div className="clockWall">{this.state.clocks}</div>
      </div>
    );
  }
}

export default App;
