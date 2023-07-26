import "./css/body.css";
import "./css/app.css";
import "./css/header.css";
import "@babel/polyfill";
import "regenerator-runtime/runtime";

import App from "./App.jsx";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("app"));

root.render(
  <BrowserRouter basename={"/"}>
    <App />
  </BrowserRouter>
);
