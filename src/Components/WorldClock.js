import React from "react";

import Clock from "./Clock";

export default class WorldClock extends React.Component {

  render() {
    let {clockData} = this.props;

    return(
      <div>
        {clockData.map((data) =>
          <Clock key={data.toString()} timeZone={data.toString()}/>
        )}
      </div>
    )
  }
}