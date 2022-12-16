import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Asia/Singapore",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.addTimeZone(this.state.value);
    //Prevent browser from refreshing after submitting form
    event.preventDefault();
  }

  render() {
    return (
      <Row>
        <Col sm={{ span: 6, offset: 3 }}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Label>Select a Time Zone</Form.Label>
            <Form.Select value={this.state.value} onChange={this.handleChange}>
              {this.props.clockData.map((timeZone, index) => (
                <option value={timeZone} key={index}>
                  {timeZone}
                </option>
              ))}
            </Form.Select>
            <Button type="submit" className="mt-2">
              Add
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Dropdown;
