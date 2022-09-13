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
    this.state = { date: new Date() };
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
                <p>Hello</p>
              </Col>
              <Col>
                <Clock timeZone="America/Los_Angeles" />
              </Col>
              <Col>
                <Clock timeZone="Europe/London" />
              </Col>
              <Col>
                <Clock timeZone="Asia/Singapore" />
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
