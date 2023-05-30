import React from "react";
import logo from "./logo.png";
import "./App.css";
import WorldClock from "./Components/WorldClock";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showClock: true,
    };
  }

  toggleClock = () => {
    this.setState({
      showClock: !this.state.showClock,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Render date value that is stored in state */}

          <br />
          <button onClick={this.toggleClock}>Toggle Clock</button>
          <br />
          {this.state.showClock ? <WorldClock /> : "Clock has been disabled!"}
        </header>
      </div>
    );
  }
}

export default App;
