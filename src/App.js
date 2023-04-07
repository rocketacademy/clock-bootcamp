import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  render() {
    return (
      <header className="App-header">
      <Container className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock timeZone="Europe/London" />
          <Clock timeZone="America/Los_Angeles" />
          <Clock timeZone="Asia/Singapore" />         
      </Container>
      </header>
      
    );
  }
}




export default App;
