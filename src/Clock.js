import React from "react";
import "./App.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <p>
        {this.state.date.toLocaleString("en-GB", {
          timeZone: this.props.timeZone,
        })}
        , {this.props.timeZone}
      </p>
    );
  }
}

export default Clock;
