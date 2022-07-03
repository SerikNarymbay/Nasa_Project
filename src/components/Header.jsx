import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo/NASA_logo.png";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "24px",
        textTransform: "uppercase",
      }}
    >
      <NavLink to="/">
        <img
          src={logo}
          alt="logoImage"
          style={{ position: "relative", right: "200px", width: "100px" }}
        />
      </NavLink>
      <div style={{ margin: "20px" }}>
        <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
          Home
        </NavLink>
      </div>
      <div style={{ margin: "20px" }}>
        <NavLink style={{ textDecoration: "none", color: "white" }} to="/photo">
          Photo of the day
        </NavLink>
      </div>

      <div style={{ margin: "20px" }}>
        <NavLink style={{ textDecoration: "none", color: "white" }} to="/video">
          Videos
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
