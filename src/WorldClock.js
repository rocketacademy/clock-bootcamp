import React from "react";
import Clock from "./Clock";
import { Container, Row, Col } from "react-bootstrap";

class WorldClock extends React.Component {
  render() {
    const clockData = this.props.clockData;
    return (
      <Container>
        <Row>
          {clockData.map((val, index) => (
            <Col key={index}>
              <Clock timeZone={val} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default WorldClock;
