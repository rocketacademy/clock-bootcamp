import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: <></>,
    };
    this.timezonesInput = React.createRef();
    this.inputForm = (
      <Form className="w-50" onSubmit={() => this.submit()}>
        <Form.Group className="mb-3">
          <Form.Label>Set-up your clocks</Form.Label>
          <Form.Control
            type="text"
            placeholder="Asia/Singapore America/Detroit"
            ref={this.timezonesInput}
          />
        </Form.Group>
        <Button variant="light" onClick={() => this.submit()}>
          Show me the time!
        </Button>
      </Form>
    );
    this.state.display = this.inputForm;
  }

  submit() {
    const timezonesInput = this.timezonesInput.current.value.trim().split(" ");
    console.log(timezonesInput);
    this.setState({
      display: (
        <>
          <ClockTable timezonesInput={timezonesInput} />
          <Button
            variant="light"
            onClick={() => this.setState({ display: this.inputForm })}
          >
            Take me back!
          </Button>
        </>
      ),
    });
  }

  render() {
    return <>{this.state.display}</>;
  }
}

export default WorldClock;

class ClockTable extends React.Component {
  //takes a list of timezones from props and uses the map function to generate multiple Row elements
  clockItems = this.props.timezonesInput.map((timezone) => (
    <Row className="justify-content-md-center">
      <Col xs lg="2">
        {timezone}
      </Col>
      <Col xs lg="2">
        <Clock timeZone={timezone} />
      </Col>
    </Row>
  ));

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center mb-3">
          <Col xs lg="2">
            Country
          </Col>
          <Col xs lg="2">
            Time
          </Col>
        </Row>
        {this.clockItems}
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
