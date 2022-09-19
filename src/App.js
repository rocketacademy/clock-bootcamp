import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class TimeRow extends React.Component {
  render() {
    return (
      <Row>
        <Col>{this.props.countryName}</Col>
        <Col><Clock langCode='en-GB' timeZone={this.props.timeZone}/></Col>
      </Row>
    )
  }
}

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
            <TimeRow countryName="Dubai" timeZone="Asia/Dubai"/>
            <TimeRow countryName='Singapore' timeZone="Asia/Singapore" />
            <TimeRow countryName="Los Angeles" timeZone="America/Los_Angeles" />
            <TimeRow countryName="London" timeZone="Europe/London" />
          </Container>
        </header>
      </div>
    );

  }
}

export default App;
