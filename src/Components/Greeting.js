import React from "react";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName, lastName } = this.props;

    return (
      <div>
        <h1>Greetings!</h1>
        {firstName && lastName ? (
          <h2>
            {firstName} {lastName}
          </h2>
        ) : (
          <h2>Stranger</h2>
        )}
      </div>
    );
  }
}
