import React from "react"
import "./Clock.css";

export default function Clock(props) {
    const [date, refreshDate] = React.useState(new Date());

    function refreshClock() {
        refreshDate(new Date());
      }

      React.useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return () => {
            clearInterval(timerId)
        }
      }, []);

    return (
        <table>
          <thead>
            <tr>  
              <th>Country</th>
              <th>Clock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{(props.timezone).split("/")[1]}</td>
              <td>{date.toLocaleString('en-GB', { timeZone: props.timeZone })}</td>
            </tr>
          </tbody>
        </table>

   )
}

