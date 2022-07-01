import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "24px",
        textTransform: "uppercase",
      }}
    >
      <div style={{ margin: "20px" }}>
        <NavLink style={{ textDecoration: "none" }} to="/photo">
          Photo of the day
        </NavLink>
      </div>
      <div style={{ margin: "20px" }}>
        <NavLink style={{ textDecoration: "none" }} to="/image">
          Images
        </NavLink>
      </div>
      <div style={{ margin: "20px" }}>
        <NavLink style={{ textDecoration: "none" }} to="/video">
          Videos
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
