import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./components/Clock";
import Table from "react-bootstrap/Table";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Table
                        striped
                        bordered
                        size="sm"
                        variant="dark"
                        style={{ width: "60%", marginTop: "2rem" }}
                    >
                        <thead>
                            <tr>
                                <th>City</th>
                                <th>Clock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>London</td>
                                <td>
                                    <Clock timeZone="Europe/London" />
                                </td>
                            </tr>
                            <tr>
                                <td>Singapore</td>
                                <td>
                                    <Clock timeZone="Asia/Singapore" />
                                </td>
                            </tr>
                            <tr>
                                <td>Los Angeles</td>
                                <td>
                                    <Clock timeZone="America/Los_Angeles" />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </header>
            </div>
        );
    }
}

export default App;
