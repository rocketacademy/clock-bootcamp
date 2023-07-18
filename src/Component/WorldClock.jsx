import React, { useState, useEffect } from "react";

function WorldClock() {
  const [time, setTime] = useState({
    hongKong: new Date().toLocaleString("en-US", {
      timeZone: "Asia/Hong_Kong",
    }),
    newYork: new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    }),
    london: new Date().toLocaleString("en-US", { timeZone: "Europe/London" }),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime({
        hongKong: new Date().toLocaleString("en-US", {
          timeZone: "Asia/Hong_Kong",
        }),
        newYork: new Date().toLocaleString("en-US", {
          timeZone: "America/New_York",
        }),
        london: new Date().toLocaleString("en-US", {
          timeZone: "Europe/London",
        }),
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="world-clock">
      <p>Hong Kong Time: {time.hongKong}</p>
      <p>New York Time: {time.newYork}</p>
      <p>London Time: {time.london}</p>
    </div>
  );
}

export default WorldClock;
