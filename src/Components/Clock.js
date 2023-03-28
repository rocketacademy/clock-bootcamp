import React from "react";
import { DateTime } from "luxon";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: DateTime.now(),
    };
  }

  tick() {
    this.setState({
      time: DateTime.now(),
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    // console.log("Ticked");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let { timeZone } = this.props;
    let isAM = true;
    let isDark = true;
    let currentTime = this.state.time.setZone(timeZone);
    let hour = currentTime.hour;
    let minute = currentTime.minute;
    let second = currentTime.second;

    if (hour >= 7 && hour < 19) {
      isDark = false;
    }

    if (hour > 12) {
      hour -= 12;
      isAM = false;
    } else if (hour === 0) {
      hour = 12;
    }

    return (
      <div className={isDark ? "clock-pm" : "clock-am"}>
        <div className="detail">
          <p>{timeZone}</p>
          <p className="inactive">•</p>
          <p className={isAM ? "active" : "inactive"}>AM</p>
          <p className="inactive">•</p>
          <p className={!isAM ? "active" : "inactive"}>PM</p>
        </div>
        <p className="bigText">
          {hour < 10 && "0"}
          {hour}:{minute < 10 && "0"}
          {minute}:{second < 10 && "0"}
          {second}
        </p>
        <div className="detail">
          <p>{currentTime.toLocaleString(DateTime.DATE_HUGE)}</p>
        </div>
      </div>
    );
  }
}
