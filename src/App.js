import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";
import Button from "./Button";

function Greeting(props) {
  if (props.name) {
    return (
      <p style={{ color: "pink" }}>
        Have a nice day,{" "}
        <span style={{ color: "hotpink" }}>
          <b>{props.name}</b>
        </span>
      </p>
    );
  } else {
    return (
      <p style={{ color: "yellow" }}>
        Welcome, <b>Stranger</b>
      </p>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.list = ["en-GB", "zh-HK", "ko-KR"];
    this.sglist = ["Singapore", "新加坡", "싱가포르"];
    this.hklist = ["Hongkong", "香港", "홍콩"];
    this.sklist = ["South Korea", "韩国", "대한민국"];
    this.buttonlang = ["Change to CN", "Change to KOR", "Change to EN"];
    this.index = 0;
    this.state = {
      list: this.list,
      hklist: this.hklist,
      sglist: this.sglist,
      sklist: this.sklist,
      index: this.index,
      buttonlang: this.buttonlang,
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage() {
    const newindex = (this.state.index + 1) % this.state.list.length;
    this.setState({ index: newindex });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Greeting name="Insert Name Here" />
          <img src={logo} className="App-logo" alt="logo" />
          <Clock
            lang={this.state.list[this.state.index]}
            timeZone="Singapore"
            name={this.state.sglist[this.state.index]}
          />
          <Clock
            lang={this.state.list[this.state.index]}
            timeZone="Hongkong"
            name={this.state.hklist[this.state.index]}
          />
          <Clock
            lang={this.state.list[this.state.index]}
            timeZone="ROK"
            name={this.state.sklist[this.state.index]}
          />
          <Button
            action={this.changeLanguage}
            btnlang={this.state.buttonlang[this.state.index]}
          />
        </header>
      </div>
    );
  }
}

export default App;
