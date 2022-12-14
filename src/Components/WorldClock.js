import React from "react";
import Clock from "./Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class WorldClock extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>City</h2>
          </Col>
          <Col>
            <h2>Clock</h2>
          </Col>
        </Row>
        {this.props.clockData.map((timeZone) => {
          return (
            <Row>
              <Col>{timeZone.split("/")[1]}</Col>
              <Col>
                <Clock timeZone={timeZone} />
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
}

export default WorldClock;
