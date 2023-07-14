import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    
    this.state={
      time: new Date()
    }
  }

  tick() {
    this.setState({
      time: new Date()
  })
  }

  componentDidMount() {
    this.timerID = setInterval(()=> {this.tick()}, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const {timeZone} = this.props;

    return (
      <div>
        <h2>Current Time: {this.state.time.toLocaleString('en-GB', {timeZone: (timeZone ? timeZone : undefined)})} ({(timeZone ? timeZone : "Local")})</h2>
        <br></br>
      </div>
    )
  }
}