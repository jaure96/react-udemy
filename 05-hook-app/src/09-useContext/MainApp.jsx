import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <Navbar />
      <hr />
      <Outlet />
    </>
  );
};

export default MainApp;
