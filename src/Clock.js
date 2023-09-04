import React from "react";
import logo from "./logo.png";
import "./Clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props); // call the constructor of the parent class
    this.state = { date: new Date() }; // initialize the state
    this.timeZone = props.timeZone; // set the timezone
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000); // set the timer
  }

  componentWillUnmount() {
    clearInterval(this.timerID); // clear the timer
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <p>
        ({this.timeZone}):{" "}
        {this.state.date.toLocaleString("en-US", { timeZone: this.timeZone })}
      </p>
    );
  }
}

export default Clock;
