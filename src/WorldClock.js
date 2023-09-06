// WorldClock.js
import React, { Component } from "react";
import Clock from "./clock";

class WorldClock extends Component {
  render() {
    const { clockData } = this.props;

    return (
      <div>
        {clockData.map((clockInfo, index) => (
          <Clock
            key={index}
            label={`Clock ${index + 1} (${clockInfo.country})`}
            timeZone={clockInfo.timeZone}
          />
        ))}
      </div>
    );
  }
}

export default WorldClock;
