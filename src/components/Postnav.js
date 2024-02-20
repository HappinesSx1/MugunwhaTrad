import React, { useState } from "react";
import logo from "../assets/images/Logo_octov4.png";
import { NavLink } from "react-router-dom";

const Postnav = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsDisplay(false);
  //   history.push(`/${searchTerm}`);
  // };

  const toggleSearchBar = () => {
    setIsDisplay(!isDisplay);
  };

  return (
    <>
      <div className={`searchbar-container ${isDisplay ? "visible" : ""}`}>
        <form className="search-bar">
          <input type="text" value={searchTerm} onChange={handleChange} />
          <NavLink to={`/${searchTerm}`}>
            <input type="submit" />
          </NavLink>
        </form>
      </div>
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
            <button onClick={toggleSearchBar}>Loupe</button>
            <p>Research</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postnav;
