import React from "react";
import logo from "./logo.png";
import "./App.css";

import Greeting from "./Components/Greeting";

import { Introduce } from "./Components/Introduce.js";

import Counter from "./Components/Counter.js";
import Clock from "./Components/Clock";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClock: true,
    };
  }

  // toggleClock = () => {
  //   this.setState({ showClock: !this.state.showClock });
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>{new Date().toString()}</p> */}
          {/* <Greeting firstName="Reuben" lastName="Lim" />

          <Introduce {...description} />
          <Counter />
          <Counter name="Reuben" />

          <button onClick={this.toggleClock}> Toggle Clock</button>

          {this.state.showClock ? <Clock /> : "No clock"} */}
          <Container>
            <br></br>
            <br></br>
            <Row>
              <Col>
                Singapore <Clock timeZone="Asia/Singapore" />
              </Col>
              <Col>
                {" "}
                London <Clock timeZone="Europe/London" />
              </Col>
              <Col>
                {" "}
                Reykjavik <Clock timeZone="Atlantic/Reykjavik" />
              </Col>
              <Col>
                {" "}
                New York <Clock timeZone="America/New_York" />
              </Col>
              <Col>
                Johannesburg <Clock timeZone="Africa/Johannesburg" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}
// let description = {
//   age: "31",
//   weight: "89",
//   height: "181",
// };

//setInterval(tick, 1000);

export default App;
