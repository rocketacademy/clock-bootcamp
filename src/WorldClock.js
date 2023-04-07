
import React from "react";
import Clock from "./Clock.js";

class WorldClock extends React.Component {
    constructor(props) {
      super(props);
      // Initialise component state to contain "date" attribute with current date and time
      this.clockData = props.clockData;
    }
    
    render() {
        const clockData = this.clockData;
        const dataArray = clockData.map((data) =>
        <Clock timeZone={data} />
        );
      return (
        <div>
            {dataArray}
        </div>
      );
    }
  }

  


  export default WorldClock;