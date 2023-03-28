import React from "react";
import Clock from "./Clock.js";

class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Asia/Singapore",
      timeZones: ["Asia/Singapore"],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // Why does the code below return undefined?
    // console.log(event.target.value);
    this.state.timeZones.push(this.state.value);
    let newTimeZones = this.state.timeZones;
    this.setState({
      timeZones: newTimeZones,
    });
    console.log(this.state.timeZones.toString());
    event.preventDefault();
  }

  render() {
    const listOfClocks = this.state.timeZones.map((timeZone) => {
      return (
        <div key={timeZone}>
          <Clock timeZone={timeZone} />
        </div>
      );
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>Pick a Time Zone:</div>

          <select value={this.state.value} onChange={this.handleChange}>
            <option value="America/Los_Angeles">Los Angeles</option>
            <option value="Europe/London">London</option>
            <option value="Asia/Singapore">Singapore</option>
            <option value="America/Toronto">Toronto</option>
          </select>
          <input type="submit" value="Add Time Zone" />
        </form>
        <div>{listOfClocks}</div>
      </div>
    );
  }
}

export default WorldClock;
