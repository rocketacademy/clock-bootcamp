import React from "react";
import Clock from "./Clock.js";

class WorldClock extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const listOfClocks = this.props.timeZones.map((timeZone) => {
      return (
        <div key={timeZone}>
          <Clock timeZone={timeZone} />
        </div>
      );
    });
    return <div>{listOfClocks}</div>;
  }
}

export default WorldClock;
