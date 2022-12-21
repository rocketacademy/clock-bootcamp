import React from "react";
import logo from "./logo.png";
import "./App.css";

import WorldClock from "./Components/WorldClock";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      timeZone: []
    }
  }

  addTimeZone(zone) {
    if (!this.state.timeZone.includes(zone)) {
      this.setState({
        timeZone: [...this.state.timeZone, zone]
      })
    } else {
      this.setState({
        timeZone: this.state.timeZone.filter((i) => { return i !== zone })
      });
    }
  }


  render() {
    const timeZoneList = [
      "America/Los_Angeles",
      "Europe/London",
      "Asia/Singapore",
      "Africa/Lagos",
      "Asia/Tokyo",
      "Asia/Seoul"
    ];

    const clickDemo = (e) => {
      this.addTimeZone(e.target.innerText)
    }
    
    const options = timeZoneList.map((option) => 
      <option onClick={clickDemo} key={option.toString}>{option}</option>
    )


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <select multiple>
            {options}
          </select>
          <WorldClock clockData={this.state.timeZone}/>
        </header>
      </div>
    );
  }
}

export default App;
