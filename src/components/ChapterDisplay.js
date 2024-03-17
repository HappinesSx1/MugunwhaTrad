import React from "react";
import { NavLink } from "react-router-dom";

const ChapterDisplay = ({ data }) => {
  return (
    <div className="chapters-container">
      <div className="chapters">
        {data.chapitres.map((manga, index) => (
          <div className="chapter" key={index}>
            <NavLink to={{ pathname: `${index + 1}`, state: { data: manga } }}>
              Chapitre {index + 1}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterDisplay;
