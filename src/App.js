import React from "react";
import logo from "./logo.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Render date value that is stored in state */}
          <p>{this.state.date.toString()}</p>
        </header>
      </div>
    );
  }
}

export default App;
