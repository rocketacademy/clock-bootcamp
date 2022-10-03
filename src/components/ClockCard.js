import {
  Box,
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
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import React, { useEffect, useState } from "react";
import { AnalogueClock } from "./AnalogueClock";
import { getDatetimeString, getIsDay } from "../utils/datetime";

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
    setIsDay(getIsDay(props.date, props.timeZone));
  }, [props.date, props.timeZone]);

  const DayNightIcon = () => {
    return (
      <Box sx={{ position: "absolute", p: 2.5 }}>
        {isDay ? (
          <LightModeIcon />
        ) : (
          <NightlightIcon style={{ fill: "#fff" }} />
        )}
      </Box>
    );
  };

  return (
    <ThemeProvider theme={isDay ? lightTheme : darkTheme}>
      <DayNightIcon />
      <Card sx={{ height: "100%", textAlign: "center" }} elevation={4}>
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
            {getDatetimeString(props.date, props.timeZone)}
          </Typography>
          <Typography sx={{ fontSize: "h5.fontSize" }}>
            {props.title}
          </Typography>
          <Typography>{props.timeZone.replaceAll("_", " ")}</Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
