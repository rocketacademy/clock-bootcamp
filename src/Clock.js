import React from "react";

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
    const { clockData } = this.props;
    const clocks = clockData.map((tz) => {
      return (
        <p>
          {`${this.state.date.toLocaleString("en-GB", {
            timeZone: tz,
          })} (${tz} time)`}
        </p>
      );
    });
    return <div>{clocks}</div>;
  }
}

export default Clock;
