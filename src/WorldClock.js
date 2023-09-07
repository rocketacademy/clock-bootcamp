import React from "react";
import Clock from "./Clock.js";

export default class WorldClock extends React.Component {
  constructor(props) {
    super(props);
  }

  // let {timezoneLists} = this.props.clockData;
  allClocks = this.props.clockData.map((item) => (
    <li className="p-14 h-full rounded-xl bg-slate-400 shadow-sm shadow-slate-500">
      <Clock timeZone={item} />
    </li>
  ));

  render() {
    return (
      <div>
        {/* <div className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 h-full bg-[#668cda]"> */}
        <br />
        Local Times:
        <ul className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {this.allClocks}
          {/* {this.allClocks} Why doesnt this work??*/}
          {/* <allClocks /> When do we use Arrow brackets? Only in App.js?*/}
        </ul>
      </div>
    );
  }
}
