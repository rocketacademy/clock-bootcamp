import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";  

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Container fluid="md">
            <Row className="bg-primary m-5 p-5">
              <Col>City</Col>
              <Col>Clock</Col>
            </Row>
            <Row>
              <Col>Singapore</Col>
              <Col>
                <Clock timeZone="Asia/Singapore" />
              </Col>
            </Row>
            <Row>
              <Col>New York</Col>
              <Col>
                <Clock timeZone="America/New_York" />
              </Col>
            </Row>
            <Row>
              <Col>Maputo</Col>
              <Col>
                <Clock timeZone="America/New_York" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
