import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import SignInPage from "./Containers/SignInPage";
import Header from "./Common/Header";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/*" element={<App />} />
      <Route exact path="/signin" element={<SignInPage />} />
    </Routes>
  );
};

export default Routing;
