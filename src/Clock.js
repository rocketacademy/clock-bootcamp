import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }; //state - changes = re-render
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
    return (
      <p>{`${this.state.date.toLocaleString("en-GB", {
        timeZone: this.props.timeZone,
      })}`}</p>
    );
  }
}

export default Clock;
