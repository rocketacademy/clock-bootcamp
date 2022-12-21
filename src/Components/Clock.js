import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dateTime: new Date()
    }
  }

  tick() {
    this.setState({
      dateTime: new Date()
    })
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    let {timeZone} = this.props;

    return(
      <div>
        <p>The current time in {timeZone}: {this.state.dateTime.toLocaleString('en-GB', { timeZone: timeZone })}</p>
      </div>
    )
  }
}