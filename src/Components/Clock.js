import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    //new Date() creates a date object with the current date and time:
    this.state = { date: new Date() };
  }

  // method to update current time with new date
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    console.log("ticked");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    // const { timeZone } = this.props;
    return (
      <div>
        <h3>
          {`This is the local time in ${this.props.timeZone} now. 
          It is ${this.state.date.toLocaleString("en-GB", {
            timeZone: this.props.timeZone,
          })}`}
        </h3>
      </div>
    );
  }
}

export default Clock;
