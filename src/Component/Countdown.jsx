import React, { useState, useEffect, useRef } from "react";

const Countdown = ({ countdownDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days < 10 ? "0" + days : days,
        hours: hours < 10 ? "0" + hours : hours,
        minutes: minutes < 10 ? "0" + minutes : minutes,
        seconds: seconds < 10 ? "0" + seconds : seconds,
      });
    }, 1000);

    return () => clearInterval(intervalId.current);
  }, [countdownDate]);

  return (
    <div id="countdown" class="countdown">
      <div class="time">
        <h2 id="days">{timeLeft.days}</h2>
        <small>days</small>
      </div>
      <div class="time">
        <h2 id="hours">{timeLeft.hours}</h2>
        <small>hours</small>
      </div>
      <div class="time">
        <h2 id="minutes">{timeLeft.minutes}</h2>
        <small>minutes</small>
      </div>
      <div class="time">
        <h2 id="seconds">{timeLeft.seconds}</h2>
        <small>seconds</small>
      </div>
    </div>
  );
};

export default Countdown;
