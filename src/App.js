import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";
import WorldClock from "./WorldClock.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { timezones } from "./constants";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <img src={logo} className="App-logo" alt="logo" />
              </Col>
            </Row>
            <WorldClock clockData={timezones} />
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
