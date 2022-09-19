import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { date: new Date() };
  }

  componentDidMount() {
    const seconds = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, seconds);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <p>
        {this.state.date.toLocaleString("en-GB", {
          timeZone: this.props.timeZone,
        })}
      </p>
    );
  }
}

export default Clock;
