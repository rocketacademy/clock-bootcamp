import React from "react";
import { Grid } from "@mui/material/";
import { Clock } from "./components/Clock";
import "./App.css";

const timezones = [
  "Asia/Singapore",
  "Asia/Tokyo",
  "America/New_York",
  "Europe/London",
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
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
      <div className="App">
        <header className="App-header">
          <Grid container justifyContent="center" spacing={3}>
            {timezones.map((timezone) => (
              <Grid key={timezone} item>
                <Clock timeZone={timezone} date={this.state.date} />
              </Grid>
            ))}
          </Grid>
        </header>
      </div>
    );
  }
}

export default App;
