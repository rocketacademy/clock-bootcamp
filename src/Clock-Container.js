import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Clock from "./Clock";

function ClockContainer() {
  return (
    <Container>
      <Row>
        <Col>City</Col>
        <Col>24H Clock</Col>
      </Row>
      <Row>
        <Col>Asia/Singapore</Col>
        <Col>
          <Clock timeZone="Asia/Singapore" />
        </Col>
      </Row>
      <Row>
        <Col>America/LA</Col>
        <Col>
          <Clock timeZone="America/Los_Angeles" />
        </Col>
      </Row>
      <Row>
        <Col>Europle/London</Col>
        <Col>
          <Clock timeZone="Europe/London" />
        </Col>
      </Row>
    </Container>
  );
}

export default ClockContainer;
