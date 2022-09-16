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
          <br />
          <Container>
            <Row>
              <Col>Country</Col>
              <Col>City</Col>
              <Col>Clock</Col>
            </Row>
            <br />
            <Row>
              <Col>Vietnam</Col>
              <Col>Ho Chi Minh City</Col>
              <Col>
                <Clock timeZone="Asia/Ho_Chi_Minh" />
              </Col>
            </Row>
            <Row>
              <Col>Singapore</Col>
              <Col>Singapore</Col>
              <Col>
                <Clock timeZone="Asia/Singapore" />
              </Col>
            </Row>
            <Row>
              <Col>Japan</Col>
              <Col>Tokyo</Col>
              <Col>
                <Clock timeZone="Asia/Tokyo" />
              </Col>
            </Row>
            <Row>
              <Col>USA</Col>
              <Col>San Francisco</Col>
              <Col>
                <Clock timeZone="America/Los_Angeles" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
