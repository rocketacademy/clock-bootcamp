import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Container>
            <Row>
              <Col>City</Col>
              <Col>Clock</Col>
            </Row>
            <Row>
              <Col>America/Los_Angeles</Col>
              <Col><Clock zone="America/Los_Angeles"/></Col>
            </Row>
            <Row>
              <Col>Europe/London</Col>
              <Col><Clock zone="Europe/London"/></Col>
            </Row>
            <Row>
            <Col>Asia/Singapore</Col>
            <Col><Clock zone="Asia/Singapore"/></Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
