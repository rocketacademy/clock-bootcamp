import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./components/Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>WORLD CLOCK</h1>
          <Container fluid>
            <Row>
              <Col>
                <h4>Asia - Singapore</h4>
              </Col>
              <Col>
                <Clock timeZone="Asia/Singapore" />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Europe - London</h4>
              </Col>
              <Col>
                <Clock timeZone="Europe/London" />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>America - Los Angeles</h4>
              </Col>
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
