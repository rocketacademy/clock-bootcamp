import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";
import WorldClock from "./WorldClock.js";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // Initialise component state to contain "date" attribute with current date and time
  //   this.state = { date: new Date() };
  // }

  // // Add 2 methods componentDidMount and componentWillUnmount above the render method
  // // inside the App component in App.js.

  // // componentDidMount
  // componentDidMount() {
  //   // Add setInterval function call that updates date in local state to a
  //   // new date with this.setState every second.

  //   // Save the timer ID returned by setInterval in a class variable such as this.timerId,
  //   this.timerId = setInterval(() => {
  //     // What is timerId?
  //     this.setState({ date: new Date() });
  //   }, 1000);
  // }

  // // componentWillUnmount
  // componentWillUnmount() {
  //   // Call clearInterval on that timer ID in componentWillUnmount to tear down the timer.
  //   clearInterval(this.timerId);
  // }

  render() {
    const clockData = [
      "America/Los_Angeles",
      "Europe/London",
      "Asia/Singapore",
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Render date value that is stored in state */}
          {/* <h1>Hello, world!</h1> */}

          <Clock timeZone="America/Los_Angeles" />
          <Clock timeZone="Europe/London" />
          <Clock timeZone="Asia/Singapore" />
          <WorldClock clockData={clockData} />
          {/*! How to use props instead of clockData?? */}
          {/* <p>{this.state.date.toString()}</p> */}
        </header>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           {new Date().toString()}
  //           {/* Edit <code>src/App.js</code> and save to reload. */}
  //         </p>
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;
