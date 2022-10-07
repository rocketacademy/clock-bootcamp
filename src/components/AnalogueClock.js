import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import "./Clock.css";

function changeTimezone(date, timezone) {
  let invdate = new Date(
    date.toLocaleString("en-US", {
      timeZone: timezone,
    })
  );
  let diff = date.getTime() - invdate.getTime();
  return new Date(date.getTime() - diff); // needs to substract
}

export function AnalogueClock(props) {
  const { date, timeZone, ...other } = props;
  return (
    <Clock
      renderNumbers
      size={200}
      hourHandWidth={5}
      minuteHandWidth={4}
      secondHandWidth={1}
      value={changeTimezone(date, timeZone)}
      {...other}
    />
  );
}
