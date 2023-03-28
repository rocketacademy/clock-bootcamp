import React from "react";

export default class greeting extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { firstName, lastName } = this.props;
    return (
      <div>
        <h1>Greetings</h1>
        {firstName && lastName ? (
          <h6>
            {firstName} {lastName}
          </h6>
        ) : (
          <h6>Stranger</h6>
        )}
      </div>
    );
  }
}
