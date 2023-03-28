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
    // this.timerID = setInterval(tick, 1000);
  }

  componentDidUpdate() {
    console.log("Ticked");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { timeZone } = this.props;

    return (
      <div>
        <p>
          {this.state.time.toLocaleTimeString("en-GB", {
            timeZone: timeZone,
          })}
        </p>
      </div>
    );
  }
}
