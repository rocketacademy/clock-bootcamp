import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.timeZone = props.timeZone;
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { date: new Date() };
    console.log(props.timeZone);
  }

  componentDidMount() {
    // Set date value in state every second to current date and time
    // Save setInterval timer ID in class variable for teardown in another class method
    function updateDate() {
      this.setState({date: new Date()})
      console.log("hi")
    }
    setInterval(updateDate, 10000);

    this.timerId = setInterval(() => {
      // callback function
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    // Teardown setInterval timer with timer ID saved as class variable
    clearInterval(this.timerId);
  }

  render() {
    return (
      // Render date value that is stored in state
      <p>
        {this.state.date.toLocaleString("en-GB", { timeZone: this.timeZone })}
      </p>
    );
  }
}

export default Clock;
