import { Container } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo/NASA_logo.png";

const Header = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "24px",
          textTransform: "uppercase",
        }}
      >
        <NavLink to="/">
          <img src={logo} alt="logoImage" style={{ width: "100px" }} />
        </NavLink>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ margin: "20px" }}>
            <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
              Home
            </NavLink>
          </div>
          <div style={{ margin: "20px" }}>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/photo"
            >
              Photo of the day
            </NavLink>
          </div>

          <div style={{ margin: "20px" }}>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/video"
            >
              Videos
            </NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
