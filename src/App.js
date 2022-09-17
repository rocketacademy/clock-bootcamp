import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <img src={logo} className="App-logo" alt="logo" />
              </Col>
            </Row>

            <Row>
              <Col>
                <p>City</p>
              </Col>
              <Col>
                <p>Timezone</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>America/Los_Angeles</p>
              </Col>
              <Col>
                <Clock timeZone="America/Los_Angeles" />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Europe/London</p>
              </Col>
              <Col>
                <Clock timeZone="Europe/London" />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Asia/Singapore</p>
              </Col>
              <Col>
                <Clock timeZone="Asia/Singapore" />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Asia/Qatar</p>
              </Col>
              <Col>
                <Clock timeZone="Asia/Qatar" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
