import React from "react";
import logo from "./logo.png";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import WorldClock from "./Component/WorldClock";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    // array of timezone inputs for the city and clocks that user wants to display
    const timeZonesArray = [
      "Asia/Singapore",
      "Japan",
      "Asia/Yangon",
      "Europe/London",
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />

          <Container className="container-md">
            <Row>
              <Col>City</Col>
              <Col>Clock</Col>
            </Row>
            <WorldClock timeZones={timeZonesArray} />
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
