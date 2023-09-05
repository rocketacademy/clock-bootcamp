import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./components/Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: null,
      inputValue: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleClock = () =>
    this.setState({
      showClock: !this.state.showClock,
    });

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    this.setState({ toDo: this.state.inputValue }); // Update 'toDo' state
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Current Task: {this.state.toDo}</h3>
          <form>
            <input
              type="text"
              placeholder="What are you doing?"
              value={this.state.toDo}
              onChange={this.handleChange}
            ></input>
            <button type="submit" onClick={this.handleSubmit}>
              Update
            </button>
          </form>
          <br></br>
          <Container fluid="md">
            <Row className="table-row">
              <Col className="header-elements">City</Col>
              <Col className="header-elements">Current Time</Col>
            </Row>
            <Row className="table-row">
              <Col className="table-elements">Singapore</Col>
              <Col className="table-elements">
                <Clock timeZone="Asia/Singapore" />
              </Col>
            </Row>
            <Row className="table-row">
              <Col className="table-elements">London</Col>
              <Col className="table-elements">
                <Clock timeZone="Europe/London" />
              </Col>
            </Row>
            <Row className="table-row">
              <Col className="table-elements">New York</Col>
              <Col className="table-elements">
                <Clock timeZone="America/New_York" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
