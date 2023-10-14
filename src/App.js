import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock";
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
          <img src={logo} className="App-logo" alt="logo" />
          {/* Render date value that is stored in state */}
          <Container fluid>
            <Row>
              <Col>City</Col>
              <Col>Clock</Col>
            </Row>
            <Row>
              <Col>Hong Kong</Col>
              <Col>
                <Clock timeZone="Asia/Hong_Kong" />
              </Col>
            </Row>
            <Row>
              <Col>Japan</Col>
              <Col>
                <Clock timeZone="Japan" />
              </Col>
            </Row>
            <Row>
              <Col>Los Angeles</Col>
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
