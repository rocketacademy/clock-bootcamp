import React from "react";


class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
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
    return (<p>{`${this.props.timezone}: ${this.state.date.toLocaleString("en-GB", {
          timeZone: this.props.timezone,})}`}</p>);
  }
}

export default Clock;