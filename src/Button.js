import React from "react";

class Button extends React.Component {
  render() {
    return <button onClick={this.props.action}>{this.props.btnlang}</button>;
  }
}

export default Button;
