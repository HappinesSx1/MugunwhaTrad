import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Mainhome = ({ data }) => {
  const sixPremiersElements = data.slice(0, 6);

  const [isNew, setIsNew] = useState(false);
  const dateStr = "2024-03-16T01:36:42.296+00:00"; // Votre date au format ISO 8601

  useEffect(() => {
    const date = new Date(dateStr);
    const currentDate = new Date();
    const differenceInMs = currentDate - date;
    const differenceInHours = differenceInMs / (1000 * 60 * 60);

    if (differenceInHours < 24) {
      setIsNew(true);
    }
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCard, setShowCard] = useState(true);

  // Fonction pour mettre à jour la position de la souris
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX + 30, y: e.clientY + 350 });
  };

  // Fonction pour afficher la carte et la positionner selon la position de la souris
  const handleMouseEnter = () => {
    setShowCard(true);
  };

  // Fonction pour masquer la carte lorsque la souris quitte l'image
  const handleMouseLeave = () => {
    setShowCard(false);
  };

  return (
    <>
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
                        <NavLink
                          to={
                            manga.title
                              ? `${manga.title.toLowerCase()}`
                              : "/nofound"
                          }
                        >
                          <img
                            src={manga.thumbnail}
                            alt=""
                            onMouseMove={handleMouseMove}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          />
                        </NavLink>
                      </div>
                      <div className="card-description">
                        <h4>{manga.title}</h4>
                        <div className="last-chap">
                          <NavLink
                            to={`${manga.title.toLowerCase()}/${
                              Object.keys(manga.chapitres).length - 1
                            }`}
                            className="main-chap-btn"
                          >
                            <button className="btn">
                              Chapitre {manga.chapitres.length - 1}{" "}
                              {isNew && <span>NEW</span>}
                            </button>
                          </NavLink>
                          <NavLink
                            to={`${manga.title.toLowerCase()}/${
                              Object.keys(manga.chapitres).length
                            }`}
                            className="main-chap-btn"
                          >
                            <button className="btn">
                              Chapitre {manga.chapitres.length}{" "}
                              {isNew && <span>NEW</span>}
                            </button>
                          </NavLink>
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
                    <NavLink to={`${manga.title.toLowerCase()}`}>
                      <img
                        src={manga.thumbnail}
                        alt=""
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      />
                    </NavLink>
                  </div>
                  <div className="card-description">
                    <h4>{manga.title}</h4>
                    <div className="last-chap">
                      <NavLink
                        to={`${manga.title.toLowerCase()}/${
                          Object.keys(manga.chapitres).length - 1
                        }`}
                        className="main-chap-btn"
                      >
                        <button className="btn">
                          Chapitre {manga.chapitres.length - 1}
                        </button>
                      </NavLink>
                      <NavLink
                        to={`${manga.title.toLowerCase()}/${
                          Object.keys(manga.chapitres).length
                        }`}
                        className="main-chap-btn"
                      >
                        <button className="btn">
                          Chapitre {manga.chapitres.length}
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div
        className="hover-infor"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      >
        <div className="background">
          <img src={sixPremiersElements[0].thumbnail} alt="" />
        </div>
      </div>
      {/* {showCard && (
      )} */}
    </>
  );
};

export default Mainhome;
