import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  tick() {
    this.setState({
      time: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // Teardown setInterval timer with timer ID saved as class variable
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        {this.state.time.toLocaleTimeString("en-GB", {
          timeZone: this.props.timeZone,
        })}
      </div>
    );
  }
}
