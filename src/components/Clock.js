import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <p>
                {this.state.date.toLocaleString("en-GB", {
                    timeZone: this.props.timeZone,
                })}
            </p>
        );
    }
}

export default Clock;
