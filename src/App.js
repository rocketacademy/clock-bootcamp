// App.js
import React, { Component } from "react";
import WorldClock from "./WorldClock"; // Import the WorldClock component

const clockData = [
  { timeZone: "America/New_York", country: "USA" },
  { timeZone: "Europe/London", country: "UK" },
  { timeZone: "Asia/Singapore", country: "Singapore" }, // Updated time zone
  // Add more objects with time zones and country names as needed
];

class App extends Component {
  render() {
    return (
      <div>
        <h1>World Clocks</h1>
        <WorldClock clockData={clockData} /> {/* Use the WorldClock component */}
      </div>
    );
  }
}

export default App;
