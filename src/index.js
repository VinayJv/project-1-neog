import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ContextWrapper } from "./context/dataContext";
import { ScrollToTop } from "./helpers/ScrollToTop";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextWrapper>
        <ScrollToTop />
        <App />
      </ContextWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
