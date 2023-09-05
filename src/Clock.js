import React from "react";

//Initialise component state to contain "date" attribute with current date and time
export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () =>
        this.setState({
          date: new Date(),
        }),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  //render returns ONLY ONE outer < > html tag
  render() {
    // let { timezoneName } = this.props;
    return (
      <p>
        {this.props.timeZone}
        {/* {`Local time in ${this.props.timeZone}`}: */}
        <br />
        {this.state.date.toLocaleString("en-GB", {
          timeZone: this.props.timeZone,
        })}
      </p>

      //alternative to line 30 is simply:
      // {this.props.timeZone}:
      // no nested { } and $ -- need nested { } because you want to activate the `${}` found in javascript. if you do not need any strings beforehand.

      // let { timezoneName } = this.props.timeZone;
      // return (
      //   <p>
      //     {this.state.date.toLocaleString("en-GB", {
      //       timeZone: { timezoneName },
      //     })}
      //   </p>
      // );
    );

    // return <p>this.state.date.toString()</p> --- will not be javascript function, but just string. need to have curly braces.
    // return <p>{this.state.date.toString()}</p>;
  }
}
