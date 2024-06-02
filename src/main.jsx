import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CoinContexprovider from "./context/Coincontex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CoinContexprovider>
        <App />
      </CoinContexprovider>
    </BrowserRouter>
  </React.StrictMode>
);
