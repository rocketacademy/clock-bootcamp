import Clock from "./Clock.js";
import React from "react";

export default class WorldClock extends React.Component {
  render() {
    return (
      <div className="bg-pink text-white">
        {this.props.clocks ? (
          this.props.clocks.map((zone, index) => (
            <Clock key={index} timeZone={`${zone}`} />
          ))
        ) : (
          <Clock timeZone="Asia/Hong_Kong" />
        )}
      </div>
    );
  }
}