import React from "react";
import { NavLink } from "react-router-dom";

const Mainhome = ({ data }) => {
  const sixPremiersElements = data.slice(0, 6);

  return (
    <main className="site-content">
      <div className="main-container">
        <div className="main-col">
          <div className="blog-heading">
            <h1>Dernières sorties</h1>
          </div>
          <div className="blog-listing">
            <div className="listing-content">
              <div className="cards-main">
                {data.map((manga, index) => (
                  <div className="card" key={index}>
                    <div className="card-img">
                      <NavLink to={`${manga.title.toLowerCase()}`}>
                        <img src={manga.thumbnail} alt="" />
                      </NavLink>
                    </div>
                    <div className="card-description">
                      <h4>{manga.title}</h4>
                      <div className="last-chap">
                        <button className="btn">
                          <NavLink
                            to={`${manga.title}/${
                              Object.keys(manga.chapitres).length - 1
                            }`}
                          >
                            Chapitre {manga.chapitres.length - 1}
                          </NavLink>
                        </button>
                        <button className="btn">
                          <NavLink
                            to={`${manga.title}/${
                              Object.keys(manga.chapitres).length
                            }`}
                          >
                            Chapitre {manga.chapitres.length}
                          </NavLink>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="side-col">
          <div className="cards-side">
            <div className="side-title widget-heading">
              <h4>Les plus populaire</h4>
            </div>
            {sixPremiersElements.map((manga, index) => (
              <div className="card" key={index}>
                <div className="card-img">
                  <img src={manga.thumbnail} alt="" />
                </div>
                <div className="card-description">
                  <h4>{manga.title}</h4>
                  <div className="last-chap">
                    <button className="btn">
                      <NavLink
                        to={`${manga.title}/${
                          Object.keys(manga.chapitres).length - 1
                        }`}
                      >
                        Chapitre {manga.chapitres.length - 1}
                      </NavLink>
                    </button>
                    <button className="btn">
                      <NavLink
                        to={`${manga.title}/${
                          Object.keys(manga.chapitres).length
                        }`}
                      >
                        Chapitre {manga.chapitres.length}
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mainhome;
