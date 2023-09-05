import React from "react";
import logo from "./logo.png";
import "./App.css";

// import Clock from "./Clock.js";
import WorldClock from "./WorldClock.js";

const locations = ["Asia/Singapore", "Japan", "PST8PDT"];

class App extends React.Component {
  // Additional functionality
  // constructor(props) {
  //   super(props);
  // }

  // render() is always placed as the last function in a React script
  // why on line 21 is the date accessed like a method? i.e. this.state.date rather than this.state[date]
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <WorldClock clockData={locations} />
            {/* <Clock timeZone={locations[0]} />
            <Clock timeZone={locations[1]} />
            <Clock timeZone={locations[2]} /> */}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
