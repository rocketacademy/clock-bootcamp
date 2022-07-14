import React , {useState, useEffect} from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";
import WorldClock from "./WorldClock.js"

//so what happen is from App.js we declare 2 new state variable: arrayofTimezones and chosenTimezone
// then make a form of options, when options selected, that value goes into the chosenTimezone state variable
// then only when submit Button, the chosenTimezone variable goes into arrayofTimezones and clears chosenTimezone variable
// this arrayofTimezones is then passed to the WorldClock component as a props
// inside the WorldClock component, each item inside the arrayofTimezones is displayed as a clock component using map (list and keys)
// Further explanation: the WorldClock component maps each item inside the array as a prop to the clock component 
//So for as many items inside the array, there will be as many clock components 
//each item in the array is mapped out to match the name of Clock props that will be used inside the component 

//additional details: 
// when using forms, need to use preventdefault 
// also, use conditional rendering to check if props is received inside worldclock , if not display smth else

class App extends React.Component{


constructor(props){
  super(props)
  this.state = {
    chosenTimezone:'',
    showClock:false,
    arrayOfTimezones:[]
    
  };
 this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChange = this.handleChange.bind(this);
}

  handleChange(event) {
console.log("selected option")
    this.setState({chosenTimezone: event.target.value});
  }



   handleSubmit(event){
    //when submit, add chosen time zone into the array
    this.setState({
     arrayOfTimezones: this.state.arrayOfTimezones.concat(this.state.chosenTimezone),
      chosenTimezone: "",
    });
    console.log(this.state.arrayOfTimezones);
    event.preventDefault();
    this.setState({showClock:true})
  }

//   async componentWillMount() {
//     await this.handleChange();
// }


 render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
 
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your timeZone:
          <select placeholder="select something!" value={this.state.value} onChange={this.handleChange} >
           
            <option value="America/Los_Angeles">America/Los_Angeles</option>
            <option value="Europe/London">Europe/London</option>
            <option value="Asia/Singapore">Asia/Singapore</option>
             <option value="Australia/Melbourne">Australia/Melbourne</option>
            
          </select>
        </label>
        <input type="submit" value="+" />
       
      </form>

{this.state.showClock ? <WorldClock clocks={this.state.arrayOfTimezones} />: <p>Select Timezone First</p>}
{/* {this.state.showClock ? <Clock timeZone={this.state.timeZone}/> : <p>not showing clock</p>} */}
 {/* <WorldClock clocks={this.state.arrayOfTimezones} /> */}
 
       </header>
    
      </div>
    );
  }
};
export default App;
