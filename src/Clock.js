import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    //Initialize component state to contain date attribute with current date and time
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    //save date value in state every second to current date and time
    //save setInterval timerID in class variable so can clear in the unmount method
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    //teardown timerID
    clearInterval(this.timerId);
  }

  //render date value stored in state
  render() {
    return (
      <p>
        {this.props.timeZone}:{' '}
        {this.state.date.toLocaleString('en-GB', {
          timeZone: this.props.timeZone,
        })}
      </p>
    );
  }
}

export default Clock;
