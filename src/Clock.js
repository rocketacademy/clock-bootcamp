import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timerID = 0;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    //setInterval(tick,1000)
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
      <p>
        {this.props.name ? this.props.name : this.props.timeZone}:{" "}
        {this.state.date.toLocaleString(this.props.lang, {
          timeZone: this.props.timeZone,
        })}
      </p>
    );
  }
}

export default Clock;
