// Returns true if the hour is between 7am (inclusive) and 7pm (exclusive), false otherwise
export function getIsDay(date, timeZone) {
  return (
    (parseInt(
      date.toLocaleString("en-AU", {
        timeZone: timeZone,
        hour: "numeric",
        hour12: false,
      })
    ) +
      5) %
      24 >=
    12
  );
}

export function getDatetimeString(date, timeZone) {
  return date.toLocaleString("en-AU", {
    timeZone: timeZone,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
}
