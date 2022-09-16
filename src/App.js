import React from "react";
import logo from "./logo.png";
import { Clock } from "./components/Clock";
import "./App.css";

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
          <img src={logo} className="App-logo" alt="logo" />
          <Clock timeZone="Asia/Singapore" date={this.state.date} />
          <Clock timeZone="Asia/Tokyo" date={this.state.date} />
          <Clock timeZone="America/New_York" date={this.state.date} />
          <Clock timeZone="Europe/London" date={this.state.date} />
        </header>
      </div>
    );
  }
}

export default App;
