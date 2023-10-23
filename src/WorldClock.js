import React from "react";
import WorldClockButton from "./WorldClockButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WorldClock(props) {
  const { clockData } = props;
  const multiForm = clockData.map((timeZone) => {
    return (
      <Col>
        <WorldClockButton timeZone={timeZone} />
      </Col>
    );
  });

  return (
    <Container fluid>
      <Row>
        <Col>City</Col>
        <Col>Clock</Col>
      </Row>
      {multiForm}
    </Container>
  );
}
