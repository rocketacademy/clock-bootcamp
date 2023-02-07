import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <Row>
        <Col>
          <p>{this.props.timeZone}</p>
        </Col>
        <Col>
          <p>{this.props.timeZone.split("/")[1]}</p>
        </Col>
        <Col>
          <p>
            {this.state.date.toLocaleString("en-GB", {
              timeZone: this.props.timeZone,
            })}
          </p>
        </Col>
      </Row>
    );
  }
}
