import React from "react";
import { NavLink } from "react-router-dom";

const ChapterDisplay = ({ data }) => {
  return (
    <div className="display-container">
      <div className="summary-container">
        <h3>SUMMARY</h3>
        <p>Voici le summary</p>
      </div>
      <div className="chapters-container">
        <h3>CHAPTER</h3>
        <div className="chapters">
          {data.chapitres.map((manga, index) => (
            <div className="chapter" key={index}>
              <NavLink
                to={{ pathname: `${index + 1}`, state: { data: manga } }}
              >
                Chapitre {index + 1}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterDisplay;
