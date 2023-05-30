import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Clock from "./Clock";
import { Container, Row, Col } from "react-bootstrap";
export default class MoreClocks extends React.Component {
  render() {
    return (
      <div>
        <Container>
          {this.props.timeZone.map((tz) => {
            return (
              <Row>
                <Col>
                  <Clock timeZone={tz} />
                </Col>
              </Row>
            );
          })}
        </Container>
      </div>
    );
  }
}
