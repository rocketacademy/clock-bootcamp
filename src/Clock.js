import React from 'react'

  class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <p>
        {`${this.props.timeZone}: ${this.state.date.toLocaleString("en-GB", {
          timeZone: this.props.timeZone,
        })}`}
      </p>
    );
  }
}

export default Clock;