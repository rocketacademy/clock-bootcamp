import React from "react";

class Clock extends React.Component{
    constructor(props) {
        super(props);
        // Initialise component state to contain "date" attribute with current date and time
        this.state = { date: new Date() };
        
      }
      
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
     render (){
        const timez = this.props.timeZone;
        
        const time = this.state.date.toLocaleString('en-GB',timez);
        return(
          <div>
            <h3>Time is {time} in {timez} </h3>
            
            
          </div>
        )
     }
}

export default Clock;

