import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      // diplay values depend on timezone value received
      <Row>
        <Col>{this.props.city}</Col>
        <Col>
          {this.state.date.toLocaleString("en-GB", {
            timeZone: this.props.timeZone,
          })}
        </Col>
      </Row>
    );
  }
}

export default Clock;
