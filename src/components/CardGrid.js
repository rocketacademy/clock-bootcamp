import React from "react";
import { Grid } from "@mui/material/";
import { ClockCard } from "./ClockCard";

export class CardGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

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
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <ClockCard
              title={item.label}
              timeZone={item.timeZone}
              date={this.state.date}
              close={(ev) => {
                this.props.removeCardHandler(item);
              }}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
