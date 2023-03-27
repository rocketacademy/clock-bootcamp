import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    const { timeZone } = this.props;
    return (
      <div>
        <h1>{timeZone}</h1>
        <p>
          {this.state.date.toLocaleString("en-GB", {
            timeZone: timeZone,
          })}
        </p>
      </div>
    );
  }
}

export default Clock;
