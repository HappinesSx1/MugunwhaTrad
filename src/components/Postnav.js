import React from "react";
import logo from "../assets/images/Logo_octov4.png";
import { NavLink } from "react-router-dom";

const Postnav = () => {
  return (
    <div className="above-container">
      <div className="above">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="main-menu">
          <NavLink>Accueil</NavLink>
          <NavLink>Hentai vostfr</NavLink>
          <NavLink>Hentai Porn Games</NavLink>
          <NavLink>Jeux Hentai Gratuits</NavLink>
          <NavLink>ABOUT US</NavLink>
        </div>
        <div className="search-navigation">
          <p>Research</p>
        </div>
      </div>
    </div>
  );
};

export default Postnav;
