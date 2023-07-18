import React from "react";
import WorldClock from "./Component/WorldClock";
import Countdown from "./Component/Countdown";

const Home = () => {
  const countdownDate = new Date(new Date().getFullYear() + 1, 0, 1).getTime();

  return (
    <div className="home">
      <h1>New Year Countdown</h1>
      <Countdown countdownDate={countdownDate} />
      <h1>World Clock</h1>
      <WorldClock />
    </div>
  );
};

export default Home;
