import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import SignInPage from "./Containers/SignInPage";
import SignUpPage from "./Containers/SignUpPage";
import HomePage from "./Containers/HomePage";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/*" element={<App />} />
      <Route exact path="/homepage" element={<HomePage />} />
      <Route exact path="/signin" element={<SignInPage />} />
      <Route exact path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default Routing;
