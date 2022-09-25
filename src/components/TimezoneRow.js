import React from "react";
import { Col, Row } from "react-bootstrap";
import { Clock } from "./Clock.js";

export class TimezoneRow extends React.Component {
  constructor(props) {
    super(props);
    let displayText;
    this.state = { displayText: displayText };
  }
  render() {
    return (
      <Row>
        <Col>{this.props.displayText}</Col>
        <Col>
          <Clock timeZone={this.props.timeZone} />
        </Col>
      </Row>
    );
  }
}
