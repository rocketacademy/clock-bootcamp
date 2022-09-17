import React from "react";

import "./App.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  // lifecycle methods
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  // refactored for use in lifecycle method
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <p>
        {this.state.date.toLocaleTimeString("en-US", {
          timeZone: this.props.timeZone,
        })}
      </p>
    );

    // return (
    //   <p>
    //     It is{" "}
    //     {this.state.date.toLocaleTimeString("en-US", {
    //       timeZone: this.props.timeZone,
    //     })}{" "}
    //     in {this.props.timeZone}.
    //   </p>
    // );
  }
}

export default Clock;

// const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// // an application may want to use UTC and make that visible
// const options = { timeZone: 'UTC', timeZoneName: 'short' };
// console.log(date.toLocaleTimeString('en-US', options));
// // → "3:00:00 AM GMT"

// // sometimes even the US needs 24-hour time
// console.log(date.toLocaleTimeString('en-US', { hour12: false }));
// // → "19:00:00"

// // show only hours and minutes, use options with the default locale - use an empty array
// console.log(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
// // → "20:01"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options
