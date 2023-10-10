import React from "react";
import Clock from "./Clock";

class WorldClock extends React.Component {
  render() {
    return (
      <div>
        <Clock timeZone={this.props.clockData} />
      </div>
    );
  }
}

export default WorldClock;
