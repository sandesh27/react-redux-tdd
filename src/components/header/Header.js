import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="four wide column">
      <div className="ui vertical fluid tabular menu">
        <NavLink exact to="/" className="item">
          Home
        </NavLink>
        <NavLink exact to="/geolocation" className="item">
          Geolocation
        </NavLink>
        <NavLink exact to="/images" className="item">
          Images
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
