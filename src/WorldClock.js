import React from "react";
import Clock from "./Clock.js";

const WorldClock = ({ clockData }) => {
  // ! How to use props instead?
  const clocks = clockData.map(
    (
      timezone,
      index // ! How to use props instead?
    ) => <Clock key={index} timeZone={timezone} />
  );
  return <div>{clocks}</div>;
};

export default WorldClock;
