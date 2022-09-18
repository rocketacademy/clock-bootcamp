import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";
// import { Row, Col, Container } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <table>
            <tr>
              <th>City</th>
              <th>Clock</th>
            </tr>
            <tr>
              <td>Ulaanbaatar</td>
              <td>
                <Clock timeZone="Asia/Ulaanbaatar" />
              </td>
            </tr>
            <tr>
              <td>Singapore</td>
              <td>
                <Clock timeZone="Asia/Singapore" />
              </td>
            </tr>
            <tr>
              <td>Moscow</td>
              <td>
                <Clock timeZone="Europe/Moscow" />
              </td>
            </tr>
            <tr>
              <td>London</td>
              <td>
                <Clock timeZone="Europe/London" />
              </td>
            </tr>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
