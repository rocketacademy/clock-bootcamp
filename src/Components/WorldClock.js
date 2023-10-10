import React from "react";
import Clock from "./Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./worldClock.css";

class WorldClock extends React.Component {
  render() {
    const timeZoneOfCountries = this.props.clockData;

    return (
      <Container>
        {timeZoneOfCountries.map((zone) => (
          <Row className="deco">
            <Col md={6} className="deco">
              The current time in {zone} is:
            </Col>
            <Col md={6} className="deco">
              <Clock timeZone={zone} />
            </Col>
          </Row>
        ))}
      </Container>
    );
  }
}

export default WorldClock;
