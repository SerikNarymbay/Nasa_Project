import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <NavLink to="/photo">Photo of the day</NavLink>
      <NavLink to="/image">Images</NavLink>
    </div>
  );
};

export default HomePage;
