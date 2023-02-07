import React from "react";
import logo from "./logo.png";
import "./App.css";
// import Clock from "./Components/Clock";
import WorldClock from "./Components/WorldClock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
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
            <WorldClock
              clockData={[
                "Asia/Singapore",
                "Pacific/Honolulu",
                "America/Toronto",
              ]}
            />
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
