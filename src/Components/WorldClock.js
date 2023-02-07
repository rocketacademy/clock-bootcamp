import React from "react";
import Clock from "./Clock";

export default class WorldClock extends React.Component {
  render() {
    const clocks = this.props.clockData.map((clockDatum) => (
      <Clock timeZone={clockDatum} />
    ));

    return <div>{clocks}</div>;
  }
}
