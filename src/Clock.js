import React from "react";

//Declares a class component named Clock that extends the React.Component base class.
//constructor(props) {: Defines the constructor method for the Clock component, which is called when an instance of the component is created. It accepts props as a parameter.
//super(props);: Calls the constructor of the base class (React.Component) and passes the props parameter to it.
class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initializes the component's state with an object that contains the date attribute, which is set to the current date and time.
    this.state = { date: new Date() };
  }

  // QUES: Add 2 methods componentDidMount and componentWillUnmount above the render method inside the App component in App.js.
  //Add a setInterval function call in componentDidMount that updates the date in local state to a new date with this.setState every second.
  //Save the timer ID returned by setInterval in a class variable such as this.timerId, and call clearInterval on that timer ID in componentWillUnmount to tear down the timer.

  //The componentDidMount() method is called after the component is rendered.
  //This is where you run statements that requires that the component is already placed in the DOM.
  //this.timerId = setInterval(() => {: Sets up a timer using the setInterval function, which repeatedly calls a function at a specified interval. It assigns the timer ID to the timerId class property.
  //this.setState({ date: new Date() });: Updates the component's state by calling setState, which triggers a re-render and updates the date attribute with a new Date object.
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  //componentWillUnmount() {: Defines the componentWillUnmount lifecycle method, which is called when the component is about to be removed from the DOM.
  //clearInterval(this.timerId);: Stops the interval timer by calling clearInterval and passing the timerId property.
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  //render() {: Defines the render method, which returns the JSX (JavaScript XML) that represents the component's structure and content.
  render() {
    return (
      /* Renders a p element that displays the string representation of the date attribute stored in the component's state. */
      <p>
        {this.state.date.toLocaleString("en-US", {
          timeZone: this.props.timeZone,
        })}
      </p>
    );
  }
}

export default Clock;
