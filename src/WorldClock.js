import React from "react";
import Clock from "./Clock.js";

class WorldClock extends Clock {
  render() {
    const clocks = this.props.clockArray.map((timeZone) => {
      return <Clock timeZone={timeZone} />;
    });
    return <div>{clocks}</div>;
  }
}

export default WorldClock;
