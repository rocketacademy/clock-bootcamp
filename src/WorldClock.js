import React from "react";
import Clock from "./Clock.js";

export default class WorldClock extends React.Component {
  constructor(props) {
    super(props);
  }

  // let {timezoneLists} = this.props.clockData;
  allClocks = this.props.clockData.map((item) => (
    <li>
      <Clock timeZone={item} />
    </li>
  ));

  render() {
    return (
      <div>
        Local Time of:
        <ul>
          {this.allClocks}
          {/* {this.allClocks} Why doesnt this work??*/}
          {/* <allClocks /> When do we use Arrow brackets? Only in App.js?*/}
        </ul>
      </div>
    );
  }
}
