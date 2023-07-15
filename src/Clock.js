import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    // ! Please explain

    this.state = { date: new Date() }; // the Initial state is new Date() by default
  }

  // Add 2 methods componentDidMount and componentWillUnmount above the render method
  // inside the App component in App.js.

  // componentDidMount
  componentDidMount() {
    // Add setInterval function call that updates date in local state to a
    // new date with this.setState every second.

    // Save the timer ID returned by setInterval in a class variable such as this.timerId,
    this.timerId = setInterval(() => {
      // What is timerId?
      this.setState({ date: new Date() });
    }, 1000);
  }

  // componentWillUnmount
  componentWillUnmount() {
    // Call clearInterval on that timer ID in componentWillUnmount to tear down the timer.
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Render date value that is stored in state */}
          {/* <p>{this.state.date.toString()}</p> */}
          <p>
            {`${this.props.timeZone}: ${this.state.date.toLocaleString(
              "en-GB",
              {
                timeZone: this.props.timeZone, // ! Please Explain props vs state
              }
            )}`}
          </p>
        </header>
      </div>
    );
  }
}

export default Clock;
