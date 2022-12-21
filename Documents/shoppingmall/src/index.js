import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Routing from "./Routing";

import { BrowserRouter } from "react-router-dom";
import Header from "./Common/Header";
import Footer from "./Common/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routing />
    <Footer />
  </BrowserRouter>
);
