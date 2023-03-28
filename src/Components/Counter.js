import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      clicked: 0,
    };
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1,
      clicked: this.state.clicked + 1,
    });

    // this.state.count = this.state.count + 1;
    // console.log(this.state.count);
  }

  decrementCount() {
    this.setState({
      count: this.state.count - 1,
      clicked: this.state.clicked + 1,
    });
  }

  render() {
    let { name } = this.props;
    return (
      <div>
        <h1>{name ? name : "Stranger"}</h1>
        <h4>
          Count: {this.state.count} -- Clicked: {this.state.clicked}
        </h4>

        <button onClick={() => this.incrementCount()}> +</button>
        <button onClick={() => this.decrementCount()}>-</button>
      </div>
    );
  }
}
