import React from "react";
import Clock from "./Clock";

export default class WorldClock extends React.Component {
  render() {
    return (
      <div>
        <p>
          <Clock timeZone="Asia/Singapore" />
        </p>
        <p>
          <Clock timeZone="Australia/Sydney" />
        </p>
        <p>
          <Clock timeZone="Europe/London" />
        </p>
      </div>
    );
  }
}
