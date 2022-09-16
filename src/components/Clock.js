import React from "react";

export class Clock extends React.Component {
  render() {
    return (
      // Render date value that is stored in state
      <>
        <p>{this.props.timeZone}</p>
        <p>
          {this.props.date.toLocaleString("en-GB", {
            timeZone: this.props.timeZone,
            weekday: "short",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          })}
        </p>
      </>
    );
  }
}
