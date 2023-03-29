import React from "react";
import Clock from "./Clock.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "America/Los_Angeles",
      timeZones: ["Asia/Singapore", "Europe/London"],
    };
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // Why does the code below return undefined?
    console.log(event.target.value);
    this.state.timeZones.push(this.state.value);
    let newTimeZones = this.state.timeZones;
    this.setState({
      timeZones: newTimeZones,
    });
    console.log(this.state.timeZones.toString());
    event.preventDefault();
  }

  render() {
    const listOfClocks = this.state.timeZones.map((timeZone, index) => {
      return (
        // add the timeZone and index so that each key will be unique to avoid key duplication
        <div key={timeZone + index}>
          <Clock timeZone={timeZone} />
        </div>
      );
    });
    return (
      <div>
        <form
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}
        >
          <div>Pick a Time Zone:</div>

          <Form.Select
            value={this.state.value}
            onChange={(event) => {
              this.handleChange(event);
            }}
          >
            <option value="America/Los_Angeles">Los Angeles</option>
            <option value="Europe/London">London</option>
            <option value="Asia/Singapore">Singapore</option>
            <option value="America/Toronto">Toronto</option>
            <option value="Europe/Berlin">Berlin</option>
            <option value="Asia/Hong_Kong">Hong Kong</option>
          </Form.Select>
          <Button as="input" type="submit" value="Add Time Zone" />
        </form>
        <br></br>
        <div>{listOfClocks}</div>
      </div>
    );
  }
}

export default WorldClock;
