import React from "react";
import "./App.css";
import Clock from "./Components/Clock";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="header-text">WORLD CLOCK</h1>
        </header>

        <div className="App-body">
          <div className="body-container">
            <h2 className="city">SINGAPORE</h2>
            <div className="time-container">
              <p>
                <Clock timeZone="Asia/Singapore" />
              </p>
            </div>
            <hr></hr>
          </div>

          <div className="body-container">
            <h2 className="city">SYDNEY</h2>
            <div className="time-container">
              <p>
                <Clock timeZone="Australia/Sydney" />
              </p>
            </div>
            <hr></hr>
          </div>

          <div className="body-container">
            <h2 className="city">LONDON</h2>
            <div className="time-container">
              <p>
                <Clock timeZone="Europe/London" />
              </p>
            </div>
            <hr></hr>
          </div>

          <div className="body-container">
            <h2 className="city">NEW YORK</h2>
            <div className="time-container">
              <p>
                <Clock timeZone="America/New_York" />
              </p>
            </div>
            <hr></hr>
          </div>

          <div className="body-container">
            <h2 className="city">JOHANNESBURG</h2>
            <div className="time-container">
              <p>
                <Clock timeZone="Africa/Johannesburg" />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
