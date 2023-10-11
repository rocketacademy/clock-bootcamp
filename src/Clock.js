import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // Set date value in state every second to current date and time
    // Save setInterval timerId in class variable (this.timerId) for teardown in another class method, componentWillUnmount
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    });
  }

  componentWillUnmount() {
    // Unmounting: When the timer component is removed from the DOM, React calls this method right before removing the component to perform cleanup tasks like clearing timers
    clearInterval(this.timerId);
  }

  render() {
    // Render just the date value stored in the state variable and remove any _ in the strings

    return (
      // We access the ParentComponenet's, App.js, timeZone prop in our ChildComponent here
      <p>
        {/* {formattedTimeZone}:&nbsp; */}
        {this.state.date.toLocaleString("en-GB", {
          timeZone: this.props.timeZone,
        })}
      </p>
    );
  }
}

export default Clock;
