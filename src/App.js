import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  render() {
    function AutoLayoutExample() {
      return (
        <Container>
          <Row>
            <Col>City</Col>
            <Col>Local time</Col>
          </Row>
          <Row>
            <Col>Hong Kong</Col>
            <Col>{<Clock timeZone="Asia/Hong_Kong" />}</Col>
          </Row>
          <Row>
            <Col>New York</Col>
            <Col>{<Clock timeZone="America/New_York" />}</Col>
          </Row>
          <Row>
            <Col>Moscow</Col>
            <Col>{<Clock timeZone="Europe/Moscow" />}</Col>
          </Row>
        </Container>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {AutoLayoutExample()}
        </header>
      </div>
    );
  }
}

export default App;
