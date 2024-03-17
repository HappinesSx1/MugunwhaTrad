import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const ChapitreNav = ({ data }) => {
  // const navigate = useNavigate();
  const { chapter } = useParams();
  const { name } = useParams();

  // const handleGoBack = () => {
  //   navigate(-1);
  // };
  return (
    <div className="chapnav-container">
      <div className="chapnav">
        <div className="chapnav-left">
          <NavLink to={`/${name}`}>
            <button>Retour</button>
          </NavLink>
        </div>
        <div className="chapnav-right">
          <NavLink
            to={chapter === "1" ? `/${name}/${1}` : `/${name}/${chapter - 1}`}
          >
            <button>Prev</button>
          </NavLink>
          <NavLink
            to={
              parseInt(chapter) === data
                ? `/${name}/${data}`
                : `/${name}/${parseInt(chapter) + 1}`
            }
          >
            <button>Next</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ChapitreNav;
