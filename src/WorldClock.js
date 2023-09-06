import React from "react";
import Clock from "./Clock";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class WorldClock extends React.Component {
  constructor(props) { //figure out how to add clockdata prop into here - array of timezone strings
    super(props);
  }

  render() {
    const {clockData} = this.props;
    const clocks = clockData.map((timeZone)=>
        <Row key = {timeZone.toString()}>
            <Col>{timeZone}</Col>
            <Col><Clock zone={timeZone}/></Col>
        </Row>
    );
    return (
        <div>
            <Container>
              <Row>
                <Col>City</Col>
                <Col>Clock</Col>
              </Row>
              {clocks}
            </Container>
        </div>
      );
  }
}