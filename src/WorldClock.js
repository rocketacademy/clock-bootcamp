import React from "react";
import Clock from "./clock"

class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
  }

  render() {

    return (
      <div>
        <p>
          {this.props.clockData.map(thetimezone => (<Clock timeZone={thetimezone} key={thetimezone} />))}
        </p>
      </div>
    );
  }
}

export default WorldClock;
