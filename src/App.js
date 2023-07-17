import React from "react";
import logo from "./onepiececlock.png";
import "./App.css";
import Clock from "./components/Clock.js";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Background from "./zoro-background.jpg"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{backgroundImage:`url(${Background})`,backgroundSize:'cover'}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{backgroundColor:"rgba(92,128,92,0.8)"}}> Gear 5 Clock</h1>

          <Button variant="primary">To implement background Switch Button</Button>

          <div> </div>
          <Container>
            <Row className="border-top-0 border-white" style={{backgroundColor:"rgba(92,128,92,0.8)"}}> 
              <Col>City</Col>
              <Col>Clock</Col>
            </Row>
            <Row >
              <Col className="border border-white " style={{backgroundColor:"rgba(116, 128, 116,0.8)"}}>Singapore</Col>
              <Col className="border border-white " style={{backgroundColor:"rgba(116, 128, 116,0.8)"}}><Clock timeZone="Asia/Singapore" /></Col>
            </Row>
            <Row >
              <Col className="border border-white " style={{backgroundColor:"rgba(116, 128, 116,0.8)"}}>Hong Kong</Col>
              <Col className="border border-white " style={{backgroundColor:"rgba(116, 128, 116,0.8)"}}><Clock timeZone="Asia/Hong_Kong" /></Col>
            </Row>
            <Row >
              <Col className="border border-white" style={{backgroundColor:"rgba(116, 128, 116,0.8)"}}>New York</Col>
              <Col className="border border-white" style={{backgroundColor:"rgba(116, 128, 116,0.8)"}}><Clock timeZone="America/New_York" /></Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
