import React from "react";
import logo from "./logo.png";
import Clock from "./Clock.js";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function RowInLayout({ city, localTime }) {
  return (
    <Row className="justify-content-md-center">
      <Col xs lg="2" align="left">
        {city}
      </Col>
      <Col md="auto">
        <Clock locales="en-GB" timeZone={localTime} />
      </Col>
    </Row>
  );
}

function TabularBootstrap() {
  return (
    <Container fluid>
      <RowInLayout city="Los Angeles:" localTime="America/Los_Angeles" />
      <RowInLayout city="London:" localTime="Europe/London" />
      <RowInLayout city="Singapore:" localTime="Asia/Singapore" />
    </Container>
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> <br />
          <TabularBootstrap />
        </header>
      </div>
    );
  }
}

export default App;
