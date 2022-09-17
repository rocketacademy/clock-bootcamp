import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Clock } from "./Clock.js";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeZone: "Asia/Singapore" };
  }

  handleSelect = (e) => {
    this.setState({
      timeZone: e,
    });
  };

  mapTimeZonesDropDown() {
    const mapOfTimeZones = this.props.clockData.map((timeZone) => (
      <Dropdown.Item eventKey={timeZone}>{timeZone}</Dropdown.Item>
    ));
    return mapOfTimeZones;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <p>City</p>
              </Col>
              <Col>
                <p>Timezone</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{this.state.timeZone}</p>
              </Col>
              <Col>
                <Clock timeZone={this.state.timeZone} />
              </Col>
            </Row>
          </Container>
          <div>
            <DropdownButton
              id="dropdown-basic-button"
              data-bs-display="static"
              title="Select City"
              onSelect={this.handleSelect}
            >
              {this.mapTimeZonesDropDown()}
            </DropdownButton>
          </div>
        </header>
      </div>
    );
  }

  // mapping timezones into a table
  // mapTimeZones() {
  //   const mapOfTimeZones = this.props.clockData.map((data) => (
  //     <Row>
  //       <Col>
  //         <p>{data}</p>
  //       </Col>
  //       <Col>
  //         <Clock timeZone={data} />
  //       </Col>
  //     </Row>
  //   ));
  //   return mapOfTimeZones;
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //
  //         <Container>
  //           <Row>
  //             <Col>
  //               <p>City</p>
  //             </Col>
  //             <Col>
  //               <p>Timezone</p>
  //             </Col>
  //           </Row>
  //           {this.mapTimeZones()}
  //         </Container>
  //       </header>
  //     </div>
  //   );
  // }
}
