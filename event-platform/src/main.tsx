import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import * as amplitude from "@amplitude/analytics-browser";

import "./styles/global.css";

amplitude.init("4835f5a26d5ea89eadaa950229f118ee");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
