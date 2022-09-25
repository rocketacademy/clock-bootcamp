import React from "react";
import logo from "./logo.png";
import "./App.css";
//import { Clock } from "./components/Clock.js";
import { TimezoneRow } from "./components/TimezoneRow.js";
import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>World Clock</h1>
          <Container fluid="md">
            {[
              { displayText: "Asia-Singapore", timezone: "Asia/Singapore" },
              {
                displayText: "America - New York",
                timezone: "America/New_York",
              },
              {
                displayText: "Europe - London",
                timezone: "Europe/London",
              },
            ].map((data) => {
              return (
                <TimezoneRow
                  displayText={data.displayText}
                  timezone={data.timezone}
                />
              );
            })}
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
