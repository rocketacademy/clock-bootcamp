import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

export class Clock extends React.Component {
  render() {
    return (
      <Card
        sx={{
          backgroundColor: "#fff",
        }}
      >
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
