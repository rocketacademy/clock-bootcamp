import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { date: new Date() };
  }

  tick() {
    // Update state
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    // Set date value in state every second to current date and time
    // Save setInterval timer ID in class variable for teardown in another class method
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // Teardown setInterval timer with timer ID saved as class variable
    clearInterval(this.timerID);
  }

  render() {
    return (
      <p>
        {this.state.date.toLocaleString("en-Gb", {
          timeZone: this.props.timeZone,
        })}
      </p>
    );
  }
}

export default Clock;

/*
      <Row>
        <Col>{this.props.timeZone}</Col>
        <Col>
          {this.state.date.toLocaleString("en-Gb", {
            timeZone: this.props.timeZone,
          })}
        </Col>
      </Row>

*/
