import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }
  instance() {
    this.setState({ time: new Date() });
  }
  componentDidMount() {
    console.log("Clock Loaded!");
    this.perSecond = setInterval(() => this.instance(), 1000);
  }
  componentDidUpdate() {
    console.log("1 second has passed");
  }
  componentWillUnmount() {
    console.log("Clock Removed!");
    this.perSecond = clearInterval();
  }
  render() {
    return (
      <div>
        <p>
          {this.props.timeZone} is currently{" "}
          {this.state.time.toLocaleString("en-GB", {
            timeZone: this.props.timeZone,
          })}
        </p>
      </div>
    );
  }
}
