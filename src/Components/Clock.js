import React from "react";
import ClockStyle from "./ClockStyle.css";

const link = document.createElement("link");
link.setAttribute("href", "https://fonts.cdnfonts.com/css/alarm-clock");

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }

  tick = () => {
    this.setState({
      time: new Date(),
    });
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    // console.log("Ticked");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.location}:</h1>
        <h1>
          {`${this.state.time.toLocaleString("en-GB", {
            timeZone: this.props.timeZone,
          })}`}
        </h1>
      </div>
    );
  }
}
