import { Button } from "bootstrap";
import React from "react";
import WorldClock from "./WorldClock";
//import { render } from "react-dom";
class Clock extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {date:new Date()};
  }
 
  componentDidMount(){
    console.log(this.props)
    this.timerID=setInterval(()=>this.tick(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){this.setState({
    date: new Date()
  });}


render(){
  return (
    <div>
      <h1>  {`${this.props.timeZone}: ${this.state.date.toLocaleString("en-GB", {
          timeZone: this.props.timeZone})}`}</h1>
    </div>
  )
}
}

export default Clock ; 