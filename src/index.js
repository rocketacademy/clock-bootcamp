import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);

const tick = () => {
  const element = (
    <div>
      Hello World!
      <h1>It is {new Date().toLocaleDateString()}.</h1>
    </div>
  );
  root.render(element);
};

setInterval(tick);
