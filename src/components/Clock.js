import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import "./Clock.css";

import React from "react";

function changeTimezone(date, timezone) {
  let invdate = new Date(
    date.toLocaleString("en-US", {
      timeZone: timezone,
    })
  );
  let diff = date.getTime() - invdate.getTime();
  return new Date(date.getTime() - diff); // needs to substract
}

export class ClockCard extends React.Component {
  render() {
    return (
      <Card
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <CardMedia>
          <Clock
            hourHandWidth={5}
            minuteHandWidth={4}
            secondHandWidth={1}
            value={changeTimezone(this.props.date, this.props.timeZone)}
          />
        </CardMedia>
        <CardContent>
          <Typography paragraph variant="body2" color="text.secondary">
            {this.props.timeZone}
          </Typography>
          <Typography paragraph variant="body2" color="text.secondary">
            {this.props.date.toLocaleString("en-GB", {
              timeZone: this.props.timeZone,
              weekday: "short",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
            })}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
