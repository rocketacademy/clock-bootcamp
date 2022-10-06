import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*           <p>{this.state.date.toString()}</p> */}
          <Clock timeZone="Asia/Seoul" />
          <Clock timeZone="Australia/Melbourne" />
          <Clock timeZone="US/Michigan" />
        </header>
      </div>
    );
  }
}

export default App;
