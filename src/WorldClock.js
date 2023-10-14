import Clock from "./Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

export default class WorldClock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const multiForm = this.props.clockData.map((timeZone) => {
      let name = timeZone.split("/");
      return (
        <Row>
          <Col>{name[1]}</Col>
          <Col>
            <Clock timeZone={timeZone} />
          </Col>
        </Row>
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
}
