import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    this.timerID = clearInterval(this.timerID);
  }

  render() {
    return (
      <p>
        {this.state.date.toLocaleTimeString("en-GB", {
          timeZone: this.props.timeZone,
        })}
      </p>
    );
  }
}

export default Clock;
