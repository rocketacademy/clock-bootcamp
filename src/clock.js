import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render(){
    return (
    <p>
      {this.props.timezone}: {this.state.date.toLocaleString("en-GB", this.props.timezone)}
    </p>)
  }
}

export default Clock;