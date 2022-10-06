import React from "react";
import { Container, Row, Col } from "react-bootstrap";

/* function LocaleTimeLayout() {
  return (
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
} */

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <p>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col lg={4} align="left">{`${this.props.timeZone}`}</Col>
            <Col lg={8} align="right">
              {this.state.date.toLocaleString("en-GB")}
            </Col>
          </Row>
        </Container>
      </p>
    );
  }
}

export default Clock;
