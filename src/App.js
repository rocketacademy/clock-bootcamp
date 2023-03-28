import React from "react";
import "./App.css";
import Clock from "./Components/Clock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <div>
        <h1>World Clock</h1>
        <div className="clockWall">
          <Clock timeZone="Asia/Singapore" />
          <Clock timeZone="America/New_York" />
          <Clock timeZone="Europe/London" />
          <Clock timeZone="Asia/Tehran" />
        </div>
      </div>
    );
  }
}

export default App;
