import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <ul className="nav-start">
          <li>
            <NavLink to="/">DOUJINSHI</NavLink>
          </li>
          <li>
            <a href="#">MANGA</a>
          </li>
          <li>
            <a href="#">PORNWHA</a>
          </li>
          <li>
            <a href="#">TELEGRAM</a>
          </li>
        </ul>
        <div className="nav-end">
          <button className="btn btn-nav">Sign in</button>
          <button className="btn btn-nav">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
