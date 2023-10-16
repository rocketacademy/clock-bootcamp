import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./clock"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <Clock timeZone="Asia/Singapore" />
    //       <Clock timeZone="Asia/Jakarta" />
    //       <Clock timeZone="Australia/Melbourne" />
    //     </header>
    //   </div>
    // );
    return (
      <div className="container">
        <div className="mt-4 mb-4">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="row">
          <div className ="col-6"><p>City</p></div>
          <div className ="col-6"><p>Clock</p></div>
          <Clock timeZone="Asia/Singapore" />
          <Clock timeZone="Asia/Jakarta" />
          <Clock timeZone="Australia/Melbourne" />
        </div>
      </div>
    );
    
  }

}

export default App;
