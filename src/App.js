import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock";
import { Container, Row, Col } from "react-bootstrap";

//Declares a class component named App that extends the React.Component base class.
class App extends React.Component {
  //render() {: Defines the render method, which returns the JSX (JavaScript XML) that represents the component's structure and content.
  render() {
    return (
      <div className={"App"}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div id="grid">
            <Container>
              <Row>
                <Col className="col-content">City</Col>
                <Col className="col-content">Clock</Col>
              </Row>
              <Row>
                <Col className="col-content">Asia/Singapore</Col>
                <Col className="col-content">
                  <Clock timeZone="Asia/Singapore" />
                </Col>
              </Row>
              <Row>
                <Col className="col-content">America/Sao_Paulo</Col>
                <Col className="col-content">
                  <Clock timeZone="America/Sao_Paulo" />
                </Col>
              </Row>
              <Row>
                <Col className="col-content">Cuba</Col>
                <Col className="col-content">
                  <Clock timeZone="Cuba" />
                </Col>
              </Row>
            </Container>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
