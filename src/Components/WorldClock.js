import React from "react";
import Clock from "./Clock.js";
import { Container, Row, Col } from "react-bootstrap";

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) => (
//   <li key={number.toString()}>{number}</li>
// ));

export default class WorldClock extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={5} className="bg-primary">
              City
            </Col>
            <Col sm={7} className="bg-primary">
              Clock
            </Col>
          </Row>
          {this.props.clockData.map((timeZone) => (
            <Row key={timeZone}>
              <Col sm={5}>{timeZone}</Col>
              <Col sm={7}>
                <Clock timeZone={timeZone} />
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    );
  }
}
