import React from "react";
import Clock from "./Clock";
import { Container, Row, Col } from "react-bootstrap";

class WorldClock extends React.Component {
  render() {
    const clockData = this.props.clockData;
    return (
      <Container>
        {clockData.map((val, index) => (
          <Row className="border">
            <Col md={6} className="border">
              Current time in {val}:
            </Col>
            <Col md={6} className="border">
              <Clock timeZone={val} />
            </Col>
          </Row>
        ))}
      </Container>
    );
  }
}

export default WorldClock;
