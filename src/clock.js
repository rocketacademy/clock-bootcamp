import React from "react";


class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = {
      date: new Date()
    };
    
  }

  componentDidMount(){
    this.timerId = setInterval(() => {this.setState({date: new Date()})}, 1000);
  }


  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <p>{this.props.timeZone}</p>
        <p>{this.state.date.toLocaleString("en-GB", {timeZone: this.props.timeZone})}</p>
        
      </div>
    );
  }
}

export default Clock;
