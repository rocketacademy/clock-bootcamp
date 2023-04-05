import React from "react";
import Clock from "./Clock";

class WorldClock extends React.Component {
  //
  createClock(timeZone) {
    return (
      <Clock
        // clean input data before pass to clock component
        city={
          timeZone.includes("/")
            ? timeZone.split("/")[1].replace("_", " ")
            : timeZone
        }
        timeZone={timeZone}
      />
    );
  }

  render() {
    // store and map array of timezones to createClock method
    const timeZones = this.props.timeZones;
    return <div>{timeZones.map((timeZone) => this.createClock(timeZone))}</div>;
  }
}

export default WorldClock;
