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
      <div className="transition ease-in-out duration-300 divide-y divide-solid divide-slate-500 hover:divide-slate-800 hover:scale-110">
        <p className="transition delay-0 ease-in-out duration-300 text-gray-600 text-left pl-1 hover:scale-105">
          {this.props.timeZone}
        </p>
        <p className="text-slate-100 text-right pr-1">
          &nbsp; &nbsp; &nbsp; &nbsp;
          {/* {`Local time in ${this.props.timeZone}`}: */}
          {this.state.date.toLocaleString("en-GB", {
            timeZone: this.props.timeZone,
          })}
        </p>
      </div>

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
