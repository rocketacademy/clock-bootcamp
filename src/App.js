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
              <p>City</p>
              <Col>
                <p>Singapore</p>
              </Col>
              <Col>
                <p>London</p>
              </Col>
              <Col>
                <p>Dubai</p>
              </Col>
            </Row>
            <Row>
              Clock
              <Col>
                <Clock timeZone="Asia/Singapore" />
              </Col>
              <Col>
                <Clock timeZone="Europe/London" />
              </Col>
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
