import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { AnalogueClock } from "./AnalogueClock";

export class ClockCard extends React.Component {
  render() {
    return (
      <Card>
        <CardMedia>
          <AnalogueClock
            date={this.props.date}
            timeZone={this.props.timeZone}
          />
        </CardMedia>
        <CardContent>
          <Typography
            paragraph
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "h5.fontSize" }}
          >
            {this.props.title}
          </Typography>
          <Typography
            paragraph
            variant="body2"
            color="text.primary"
            sx={{ fontSize: "h6.fontSize" }}
          >
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
