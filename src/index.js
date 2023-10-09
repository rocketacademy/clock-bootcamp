import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Rendering the root React element of the React app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }

// setInterval(tick, 1000); // setInterval() calls the tick function every 1000 milliseconds -> re-generating the <h2> element and the date and time every second
