import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    //initialise component state to contain "date" attribure with current date & time
    this.state = {
      date: new Date(),
    };
  }

  // this tick function here will allow the browser to update the time w/o having to refresh the page.
  //React recommends to use "set" if we want to update the above value. For example: [something, setSomething], [state, setState].
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    //use "setInterval" to run a function every second
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    //for every update, the console will print "ticked" to show that the state is updated.
    console.log("Ticked");
  }

  componentWillUnmount() {
    //use "clearInterval" to clear a function every second
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <p>
          <strong>{`${this.props.timeZone}`}</strong>
          {`: ${this.state.date.toLocaleString("en-GB", {
            timeZone: this.props.timeZone,
          })}`}
        </p>
      </div>
    );
  }
}
