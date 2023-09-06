import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";
import "bootstrap/dist/css/bootstrap.css";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <header className="App-generic">
          <p>World Clock</p>
        </header>
        <header className="App-header">
          <Container>
            <Row>
              <Col className="bg-secondary p-2">Timezone</Col>
              <Col className="bg-secondary p-2">Time</Col>
            </Row>
            <Row>
              <Col className="App-generic">Singapore</Col>
              <Col className="App-generic">
                <Clock timeZone="Asia/Singapore" />
              </Col>
            </Row>
            <Row>
              <Col className="App-generic">London</Col>
              <Col className="App-generic">
                <Clock timeZone="Europe/London" />
              </Col>
            </Row>
            <Row>
              <Col className="App-generic">New York</Col>
              <Col className="App-generic">
                <Clock timeZone="America/New_York" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
