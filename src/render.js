import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import State from "./State";
import { BrowserRouter } from "react-router-dom";

export let rerenderRoot = (State) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={State} />
      </React.StrictMode>
    </BrowserRouter>
  );
};
