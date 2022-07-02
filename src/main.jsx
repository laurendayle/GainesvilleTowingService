import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
import 'material-icons/iconfont/material-icons.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
