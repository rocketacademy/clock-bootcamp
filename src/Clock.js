import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  componentDidUpdate() {
    console.log("Ticked");
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    const date = new Date();
    date.toLocaleString("en-GB", { timeZone: "Asia/Singapore" });
    return (
      <div className="App">
        <header className="App-generic">
          <p>{`${this.state.date.toLocaleString("en-GB", {
            timeZone: this.props.timeZone,
          })}`}</p>
        </header>
      </div>
    );
  }
}

export default Clock;

// constructor(props) {
//   super(props);
//   // Initialise component state to contain "date" attribute with current date and time
//   this.state = { date: new Date() };
// }
// componentDidMount() {
//   this.timerID = setInterval(() => {
//     this.setState({
//       date: new Date(),
//     });
//   }, 1000);
// }
// componentDidUpdate() {
//   console.log("Ticked");
// }
// componentWillUnmount() {
//   clearInterval(this.timerID);
// }
