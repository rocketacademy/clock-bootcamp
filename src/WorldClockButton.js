import React from "react";
import Clock from "./Clock";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class WorldClockButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  handleClick = (e) => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const name = this.props.timeZone.split("/")[1];
    return this.state.show ? (
      <Row>
        <Col>
          {name}
          <button onClick={this.handleClick}>Hide clock</button>
        </Col>
        <Col>
          <Clock timeZone={this.props.timeZone} />
        </Col>
      </Row>
    ) : (
      <button onClick={this.handleClick}>Show {name} clock</button>
    );
  }
}
