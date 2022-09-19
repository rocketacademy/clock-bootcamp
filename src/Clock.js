import React from "react";
import "./Clock.css";

export default function Clock(props) {
  const [date, refreshDate] = React.useState(new Date());

  function refreshClock() {
    refreshDate(new Date());
  }

  React.useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{props.timezone.split("/")[1]}</td>
            <td>
              {date.toLocaleString("en-GB", {
                timeZone: props.timezone,
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
