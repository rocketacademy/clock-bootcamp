import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import * as ReactDOM from "react-dom";
// import "./Clock.css";

class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timezones: "",
    };
    this.display = (
      <Form className="w-50">
        <Form.Group>
          <Form.Label>
            Set-up your clocks (press "enter" to confirm inputs){" "}
          </Form.Label>
          <Form.Control
            // value={this.state.timezones}
            ref={this.textInput}
            type="text"
            onChange={(e) => this.setState({ timezones: e.target.value })}
            placeholder="Asia/Singapore America/Detroit"
          />
        </Form.Group>
      </Form>
    );
    this.dashboard = <ClockTable />;
  }

  render() {
    return <>{this.display}</>;
  }
}

export default WorldClock;

class ClockTable extends React.Component {
  constructor(props) {
    super(props);
    this.timezones = props;
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            Country
          </Col>
          <Col xs lg="2">
            Time
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            Asia/Singapore
          </Col>
          <Col xs lg="2">
            <Clock timeZone="Asia/Singapore" />
          </Col>
        </Row>
      </Container>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount = () => {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.timerId);
  };
  render() {
    return (
      <p>
        {this.state.date.toLocaleTimeString("en-GB", {
          timeZone: this.props.timeZone,
        })}
      </p>
    );
  }
}
