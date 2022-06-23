import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {addAboutRef, addCars, addlistNew, addTextArea, addTextArea2} from "./State";

export let rerenderRoot = (State) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
            state={State}
            addTextArea={addTextArea}
            // addName={addName}
            addCars={addCars}
            addTextArea2={addTextArea2}
            addlistNew={addlistNew}
            addAboutRef={addAboutRef}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};
