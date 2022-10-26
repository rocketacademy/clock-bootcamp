import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Components/Clock";

/*
  React Bootstrap Configuration
*/
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Container className="mt-5">
            <Row>
              <Col
                xs={6}
                style={{ backgroundColor: "grey" }}
                className="border border-light"
              >
                <p>City</p>
              </Col>
              <Col
                style={{ backgroundColor: "grey" }}
                xs={6}
                className="border border-light"
              >
                <p>Date & Time</p>
              </Col>
            </Row>

            <Row>
              <Col
                xs={6}
                className="border border-light"
              >
                <p>Singapore</p>
              </Col>
              <Col xs={6} className="border border-light">
                <Clock timeZone="Asia/Singapore" />
              </Col>
            </Row>

            <Row>
              <Col xs={6} className="border border-light">
                <p>London</p>
              </Col>
              <Col xs={6} className="border border-light">
                <Clock timeZone="Europe/London" />
              </Col>
            </Row>

            <Row>
              <Col xs={6} className="border border-light">
                <p>Arizona</p>
              </Col>
              <Col xs={6} className="border border-light">
                <Clock timeZone="America/Phoenix" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
