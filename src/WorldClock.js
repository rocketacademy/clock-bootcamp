import React from "react";

import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Clock from "./Clock.js";

class WorldClock extends React.Component {
  mapTimeZones() {
    const mapOfTimeZones = this.props.clockData.map((data) => (
      <Row>
        <Col>
          <p>{data}</p>
        </Col>
        <Col>
          <Clock timeZone={data} />
        </Col>
      </Row>
    ));
    return mapOfTimeZones;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <p>City</p>
              </Col>
              <Col>
                <p>Timezone</p>
              </Col>
            </Row>
            {this.mapTimeZones()}
          </Container>
        </header>
      </div>
    );
  }
}

export default WorldClock;
