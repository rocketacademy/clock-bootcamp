import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock";
import { Container, Row, Col } from "react-grid-system";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>World Clock Project</h1>
          <Container>
            <Row>
              <Col md={4}>City</Col>
              <Col md={8}>Timezone</Col>
            </Row>
            <Row className="table-elements">
              <Col md={4}>Singapore</Col>
              <Col md={8}>
                <Clock timeZone="Asia/Singapore" />
              </Col>
            </Row>
            <Row className="table-elements">
              <Col md={4}>Los Angeles</Col>
              <Col md={8}>
                <Clock timeZone="America/Los_Angeles" />
              </Col>{" "}
            </Row>
            <Row className="table-elements">
              <Col md={4}>New York</Col>
              <Col md={8}>
                <Clock timeZone="America/New_York" />
              </Col>{" "}
            </Row>
            <Row className="table-elements">
              <Col md={4}>London</Col>
              <Col md={8}>
                <Clock timeZone="Europe/London" />
              </Col>{" "}
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
