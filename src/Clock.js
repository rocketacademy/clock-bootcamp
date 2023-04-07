
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      // Initialise component state to contain "date" attribute with current date and time
      this.state = { date: new Date() };
      this.timeZone = props.timeZone;
    }
  
    componentDidMount() {
      // Set date value in state every second to current date and time
      // Save setInterval timer ID in class variable for teardown in another class method
      this.timerId = setInterval(() => {
        this.setState({
          date: new Date(),
        });
      }, 1000);
    }
  
    componentWillUnmount() {
      // Teardown setInterval timer with timer ID saved as class variable
      clearInterval(this.timerId);
    }
    
    render() {
      return (
        <Container className="Clock" fluid="md">
            {/* Render date value that is stored in state */}
            <Row className="justify-content-md-center">
              {/*50% distributed width at all cases*/}
              <Col xs={5} sm={5} md = {5} lg={5}>{`${this.timeZone}`}</Col>
              <Col xs={5} sm={5} md = {5} lg={5}>{`${this.state.date.toLocaleString("en-GB", {timeZone: this.timeZone})}`}</Col>
            </Row>
        </Container>
      );
    }
  }
  
  
  export default Clock;