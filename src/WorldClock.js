import React from "react";
import Clock from "./Clock.js";

class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "grapefruit", listOfFlavors: ["lime", "grapefruit"] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //console.log(event.target.value);
    this.state.listOfFlavors.push(this.state.value);
    let newListOfFlavors = this.state.listOfFlavors;
    this.setState({
      listOfFlavors: newListOfFlavors,
    });
    alert("Your favorite flavor is: " + this.state.listOfFlavors.toString());
    event.preventDefault();
  }

  render() {
    const listOfClocks = this.props.timeZones.map((timeZone) => {
      return (
        <div key={timeZone}>
          <Clock timeZone={timeZone} />
        </div>
      );
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>{listOfClocks}</div>
      </div>
    );
  }
}

export default WorldClock;
