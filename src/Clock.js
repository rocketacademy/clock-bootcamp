import React from "react"

export default function Clock() {
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
        <p>{date.toLocaleTimeString()}</p>
    )
}

