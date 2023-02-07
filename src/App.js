import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Components/Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Container>
            <Row>
              <Col>
                <h1>Time Zone</h1>
              </Col>
              <Col>
                <h1>City</h1>
              </Col>
              <Col>
                <h1>Local Time</h1>
              </Col>
            </Row>
            <Clock timeZone="Asia/Singapore" />
            <Clock timeZone="America/Toronto" />
            <Clock timeZone="Pacific/Honolulu" />
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
