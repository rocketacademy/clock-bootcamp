import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";

class App extends React.Component {
  // constructor(props) {
  //   super(props)};
  //   // Initialise component state to contain "date" attribute with current date and time
  //   this.state = { date: new Date() };
  // }
  // componentDidMount() {
  //   // Set date value in state every second to current date and time
  //   // Save setInterval timer ID in class variable for teardown in another class method
  //   this.timerId = setInterval(() => {
  //     this.setState({
  //       date: new Date(),
  //     });
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   // Teardown setInterval timer with timer ID saved as class variable
  //   clearInterval(this.timerId);
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock timeZone="America/Los_Angeles" />
          <Clock timeZone="Europe/London" />
          <Clock timeZone="Asia/Singapore" />
        </header>
      </div>
    );
  }
}
export default App;
