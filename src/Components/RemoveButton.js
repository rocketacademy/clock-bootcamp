import React from "react";
import Button from "react-bootstrap/Button";

class RemoveButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //console.log(this.props.timeZone);
    this.props.removeTimeZone(this.props.id);
  }

  render() {
    return (
      <Button variant="secondary" onClick={this.handleClick}>
        -
      </Button>
    );
  }
}

export default RemoveButton;
