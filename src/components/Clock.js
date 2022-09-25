import React from "react";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () =>
        this.setState({
          date: new Date(),
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <p>
        {this.state.date.toLocaleString("en-US", {
          timeZone: this.props.timeZone,
        })}
      </p>
    );
  }
}
