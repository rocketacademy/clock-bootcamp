import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  timeZonesList(props) {
    const timeZones = props.timeZones;
    const listTimezones = timeZones.map((timezone) => (
      <Col key={timezone.toString()}>
        {this.state.date.toLocaleString("en-US", {
          timeZone: timezone,
        })}
      </Col>
    ));
    return <Row>{listTimezones}</Row>;
  }

  render() {
    return (
      <div>
        <Container fluid="md">
          <Row>
            <Col>City</Col>
            <Col>Clock</Col>
          </Row>
          {array.map((item) => (
            <Row>
              <Col>{item}</Col>
              <Col>
                {this.state.date.toLocaleString("en-US", {
                  timeZone: item,
                })}
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    );
  }
}

const array = ["Asia/Singapore", "America/Los_Angeles", "Australia/Queensland"];

export default Clock;
