import React from "react";
import logo from "./logo.png";
import "./App.css";
import MoreClocks from "./MoreClocks";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Button } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: false };
  }
  toggleDisplay = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  componentDidMount() {
    console.log("Main App Mounted!");
  }
  componentDidUpdate() {
    console.log("Main App is Updated!");
  }
  componentWillUnmount() {
    console.log("Main App is Disappearing??");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Button onClick={this.toggleDisplay}>Enable/Disable Clock!</Button>
          </p>
          {this.state.display ? (
            <MoreClocks
              timeZone={[
                "Asia/Singapore",
                "Antarctica/South_Pole",
                "Asia/Pyongyang",
                "Europe/Vatican",
                "America/Indianapolis",
              ]}
            />
          ) : (
            <h3>Clock Not Enabled Yet!</h3>
          )}
        </header>
      </div>
    );
  }
}

export default App;
