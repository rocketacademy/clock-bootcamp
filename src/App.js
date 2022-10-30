import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Time in Singapore:
          <Clock timeZone="Asia/Singapore" />
          Time in Tokyo:
          <Clock timeZone="Asia/Tokyo" />
          Time in Brazil:
          <Clock timeZone="Brazil/East" />
        </header>
      </div>
    );
  }
}

export default App;
