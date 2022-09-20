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
          <Container className="Clock-display">
            <Row className="Area-clock">
              <Col className="region">Asia/Singapore</Col>
              <Col className="timezone">
                <Clock timeZone="Asia/Singapore" />
              </Col>
            </Row>
            <Row className="Area-clock">
              <Col className="region">Zulu</Col>
              <Col className="timezone">
                <Clock timeZone="Zulu" />
              </Col>
            </Row>
            <Row className="Area-clock">
              <Col className="region">Pacific/Pitcairn</Col>
              <Col className="timezone">
                <Clock timeZone="Pacific/Pitcairn" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
