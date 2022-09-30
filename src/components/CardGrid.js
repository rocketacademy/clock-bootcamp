import React from "react";
import { Grid } from "@mui/material/";
import { ClockCard } from "./Clock";

export class CardGrid extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ height: "100%" }}
      >
        {this.props.data.map((item) => (
          <Grid key={item} item>
            <ClockCard
              title={item.label}
              timeZone={item.timeZone}
              date={this.state.date}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
