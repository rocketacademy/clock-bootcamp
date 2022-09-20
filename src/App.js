import React from "react";
import logo from "./logo.png";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { WorldClock } from "./worldclock.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Container>
            <Row>
              <Col>City</Col>
              <Col>Time</Col>
            </Row>
            <WorldClock />
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
