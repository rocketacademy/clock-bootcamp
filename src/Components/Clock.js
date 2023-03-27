import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    console.log("Ticked");
  }

  componentWillUnmount() {}

  render() {
    let { zoneName, hourDiff, minDiff } = this.props;
    let isAM = true;
    let hours = this.state.time.getHours();

    if (hourDiff) {
      hours = this.state.time.getUTCHours() + Number(hourDiff);
    }
    if (hours > 12) {
      hours -= 12;
      isAM = false;
    }

    let minutes = this.state.time.getMinutes();

    if (minDiff) {
      minutes = this.state.time.getUTCMinutes() + Number(minDiff);
    }
    if (minutes > 60) {
      minutes -= 60;
      hours += 1;
    } else if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }

    let seconds = this.state.time.getUTCSeconds();

    return (
      <div className={isAM ? "clock-am" : "clock-pm"}>
        <div className="amPM">
          <p className="detail">{zoneName ? zoneName : "NOW"}</p>
          <p className={isAM ? "active" : "inactive"}>>AM</p>
          <p className={!isAM ? "active" : "inactive"}>>PM</p>
        </div>
        <p className="bigText">
          {hours < 10 && "0"}
          {hours}:{minutes < 10 && "0"}
          {minutes}:{seconds < 10 && "0"}
          {seconds}
        </p>
      </div>
    );
  }
}
