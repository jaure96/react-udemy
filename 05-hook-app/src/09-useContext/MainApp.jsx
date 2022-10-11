import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/login"}>Login</Link>
      <hr />
      <Outlet />
    </>
  );
};

export default MainApp;
