import React from "react";
import Clock from "./Clock";
import City from "./City";
import Container from "react-bootstrap/Container";
import RemoveButton from "./RemoveButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class WorldClock extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={5} xs={12}>
            <h2>City</h2>
          </Col>
          <Col sm={7} xs={12}>
            <h2>Clock</h2>
          </Col>
        </Row>
        {this.props.clockData.map((timeZone, index) => {
          return (
            <Row key={timeZone[0].split("/")[1] + index}>
              <Col sm={5}>
                <City timeZone={timeZone} />
              </Col>
              <Col sm={6}>
                <Clock timeZone={timeZone[0]} />
              </Col>
              <Col sm={1}>
                <RemoveButton
                  removeTimeZone={this.props.removeTimeZone}
                  id={timeZone[1]}
                />
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
}

export default WorldClock;
