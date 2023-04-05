import React from "react";
import "./App.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <p>
        {this.props.timeZone},
        {this.state.date.toLocaleString("en-GB", {
          timeZone: this.props.timeZone,
        })}
      </p>
    );
  }
}

export default Clock;
