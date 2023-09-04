// Clock.js
import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateTime: this.getDateTimeString(new Date(), this.props.timeZone),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        dateTime: this.getDateTimeString(new Date(), this.props.timeZone),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getDateTimeString(date, timeZone) {
    const options = {
      timeZone: timeZone || undefined,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  }

  render() {
    return (
      <p>
        {this.props.label}: {this.state.dateTime}
      </p>
    );
  }
}

export default Clock;
