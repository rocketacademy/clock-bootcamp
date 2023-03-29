import React from "react";
import logo from "./logo.png";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

 
import Clock from "./Components/Clock.js"
import Title from "./Components/Title.js"
import Search from "./Components/Search.js"

class App extends React.Component {
   
  render() {
    const colHeading = {
      backgroundColor: "grey",
    }

    const cityColor = {
      backgroundColor: "yellow",
      color: "black",
    }
     

    const containerStyle = {
      backgroundColor: "lightblue"
    }
    return (
      <div className="App">
        {/* <header className="App-header">
          
        </header>
         */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* Render date value that is stored in state */}
          <Title>World Clock</Title>
          <Search></Search>
          <Container style={containerStyle}>
            <Row>
              <Col>
                  <h1 style={colHeading}>City</h1>
              </Col>
              <Col>
                  <h1 style={colHeading}>Clock</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                  <h1 style={cityColor}>Singapore</h1>
              </Col>
              <Col>
                  <Clock timeZone="Asia/Singapore"/>
              </Col>
            </Row>
            <Row>
              <Col>
                  <h1 style={cityColor}>Canberra</h1>
              </Col>
              <Col>
                  <Clock timeZone="Australia/Canberra"/>
              </Col>
            </Row>
            <Row>
              <Col>
                  <h1 style={cityColor}>London</h1>
              </Col>
              <Col>
                  <Clock timeZone="Europe/London"/>
              </Col>
            </Row>
            <Row>
              <Col>
                  <h1 style={cityColor}>Los Angeles</h1>
              </Col>
              <Col>
                  <Clock timeZone="America/Los_Angeles"/>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}




 

export default App;
