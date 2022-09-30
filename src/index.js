import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {AppProvidre} from "./component/context"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvidre>
      <Router>
        <App />
      </Router>
    </AppProvidre>
  </React.StrictMode>
);
