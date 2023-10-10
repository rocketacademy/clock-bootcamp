import React from "react";
import logo from "./logo.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    //initialise component state to contain "date" attribute with current date and time
    //extends keyword here causes App class to inherit from React.Component
    //constructor() function sets up the App class with initial arguments called "props"
    //super keyword causes the App class to update the props argument in React.Component
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.date.toString()}</p>
        </header>
      </div>
    );
  }
}

export default App;
