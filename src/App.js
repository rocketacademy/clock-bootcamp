import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";
// import ClockContainer from "./bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
//   const date = new Date();
// date.toLocaleString('en-GB', { timeZone: 'Asia/Singapore' })





  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <Container fluid>
         <Row>
           <Col><Clock timeZone="America/Los_Angeles" /></Col> 
          
          <Col><Clock timeZone="Europe/London" /></Col> 
          
           <Col><Clock timeZone="Asia/Singapore"/></Col> 
                </Row>  
                    </Container>
                    </header>
      </div>
    );
  }
}
export default App;
