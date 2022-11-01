import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute
    // to contain current date and time
    this.state = { date: new Date() };
  }

  // Make clock re-render every second
  // Add component lifecycle methods to update date state every second and teardown state-updating logic when component unmounts

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
      <div>
        <h4>
          {`
          ${this.state.date.toLocaleString("en-GB", {
            timeZone: this.props.timeZone,
          })}
          (${this.props.timeZone})`}
        </h4>
      </div>
    );
  }
}
