import React from "react";
import { Text } from "@chakra-ui/react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.setState({ date: new Date() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    const { timeZone } = this.props;
    return (
      <Text color="orange.200">
        {this.state.date.toLocaleString("en-GB", { timeZone: timeZone })}
      </Text>
    );
  }
}
export default Clock;
