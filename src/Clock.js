import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
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
    // Teardown setInterval timer with timer ID saved as class variable
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        {/* Render date value that is stored in state */}
        <p>
          {this.state.date.toLocaleString("en-GB", {
            timeZone: this.props.timeZone,
          })}
        </p>
      </div>
    );
  }
}

export default App;
