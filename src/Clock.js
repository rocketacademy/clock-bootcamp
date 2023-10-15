import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }
  // tick() {
  //   this.setState({ date: new Date() });
  // }
  // componentDidMount() {
  //   this.TimerID = setInterval(() => this.tick, 1000);
  // }
  componentDidMount() {
    // Set date value in state every second to current date and time
    // Save setInterval timer ID in class variable for teardown in another class method
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    // Teardown setInterval timer with timer ID saved as class variable
    clearInterval(this.timerId);
  }
  render() {
    return (
      <div>
        <p>
          {this.state.time.toLocaleTimeString("en-GB", {
            timeZone: this.props.timeZone,
          })}{" "}
        </p>
      </div>
    );
  }
}
