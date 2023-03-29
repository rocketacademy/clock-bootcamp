import React from "react";
import logo from "./logo.png";
import "./App.css";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{"World Clock"}</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{`Singapore Time: ${this.state.date.toLocaleTimeString()}`}</h2>
        </header>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
