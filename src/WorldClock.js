import React from "react";
import Clock from "./Clock";

class WorldClock extends React.Component {
  render() {
    const clockData = this.props.clockData;
    return (
      <div>
        {clockData.map((val, index) => {
          return <Clock timeZone={val} />;
        })}
      </div>
    );
  }
}

export default WorldClock;
