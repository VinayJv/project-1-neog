import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { DataWrapper } from "./context/dataContext";
import { ScrollToTop } from "./helpers/ScrollToTop";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataWrapper>
        <ScrollToTop />
        <App />
      </DataWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
