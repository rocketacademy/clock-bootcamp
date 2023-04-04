import React from "react";
import Clock from "./Clock.js";

class WorldClock extends React.Component {
  render() {
    const { clockData } = this.props;
    const clocks = clockData.map((timeZone) => {
      return <Clock timeZone={timeZone} />;
    });

    return <div>{clocks}</div>;
  }
}

export default WorldClock;
