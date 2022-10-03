import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { AnalogueClock } from "./AnalogueClock";

export class ClockCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          sx={{ height: 0 }}
          action={
            <IconButton aria-label="settings" onClick={this.props.close}>
              <CloseIcon />
            </IconButton>
          }
        />
        <CardMedia>
          <AnalogueClock
            date={this.props.date}
            timeZone={this.props.timeZone}
          />
        </CardMedia>
        <CardContent>
          <Typography sx={{ fontSize: "h6.fontSize" }}>
            {this.props.date.toLocaleString("en-AU", {
              timeZone: this.props.timeZone,
              weekday: "short",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
            })}
          </Typography>
          <Typography sx={{ fontSize: "h5.fontSize" }}>
            {this.props.title}
          </Typography>
          <Typography>{this.props.timeZone}</Typography>
        </CardContent>
      </Card>
    );
  }
}
