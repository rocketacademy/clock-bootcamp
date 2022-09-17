import React from "react";
import logo from "./logo.png";
import Clock from "./Clock.js";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyLayout() {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col xs lg="2" align="left">
          Los Angeles:
        </Col>
        <Col md="auto">
          <Clock timeZone="America/Los_Angeles" />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs lg="2" align="left">
          London:
        </Col>
        <Col md="auto">
          <Clock timeZone="Europe/London" />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs lg="2" align="left">
          Singapore:
        </Col>
        <Col md="auto">
          <Clock timeZone="Asia/Singapore" />
        </Col>
      </Row>
    </Container>
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> <br />
          <MyLayout />
        </header>
      </div>
    );
  }
}

export default App;
