import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Clock from "./Clock.js";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const clockData = [
  "Asia/Singapore",
  "Europe/London",
  "Asia/Tokyo",
  "Asia/Taipei",
  "Asia/Tel_Aviv",
];

class WorldClock extends React.Component {
  clockList = clockData.map((clockDataListElement) => (
    <ListGroup.Item>
      <li key={clockDataListElement}>
        <Clock timeZone={clockDataListElement} />
      </li>
    </ListGroup.Item>
  ));

  render() {
    return (
      <ListGroup as="ol" numbered>
        {this.clockList}
      </ListGroup>
    );
  }
}

export default WorldClock;
