import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  createTheme,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { AnalogueClock } from "./AnalogueClock";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export function ClockCard(props) {
  const [isDay, setIsDay] = useState(true);
  useEffect(() => {
    setIsDay(
      (parseInt(
        props.date.toLocaleString("en-AU", {
          timeZone: props.timeZone,
          hour: "numeric",
          hour12: false,
        })
      ) +
        5) %
        24 >=
        12
    );
  }, [props.date, props.timeZone]);

  return (
    <ThemeProvider theme={isDay ? lightTheme : darkTheme}>
      <Card>
        <CardHeader
          sx={{ height: 0 }}
          action={
            <IconButton aria-label="settings" onClick={props.close}>
              <CloseIcon />
            </IconButton>
          }
        />
        <CardMedia>
          <AnalogueClock
            className={isDay ? "light" : "dark"}
            date={props.date}
            timeZone={props.timeZone}
          />
        </CardMedia>
        <CardContent>
          <Typography sx={{ fontSize: "h6.fontSize" }}>
            {props.date.toLocaleString("en-AU", {
              timeZone: props.timeZone,
              weekday: "short",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
            })}
          </Typography>
          <Typography sx={{ fontSize: "h5.fontSize" }}>
            {props.title}
          </Typography>
          <Typography>{props.timeZone}</Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
