import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Container className="grid">
            <Row>
              <Col>City</Col>
              <Col>Clock</Col>
            </Row>
            <Row>
              <Col>Singapore</Col>
              <Col>
                <Clock timeZone="Asia/Singapore" />
              </Col>
            </Row>
            <Row>
              <Col>London</Col>
              <Col>
                <Clock timeZone="Europe/London" />
              </Col>
            </Row>
            <Row>
              <Col>Dubai</Col>
              <Col>
                <Clock timeZone="Asia/Dubai" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
