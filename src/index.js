import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

function tick() {
  root.render(<App />);
}

setInterval(tick, 1000);
