import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Postnav from "../components/Postnav";
import Header from "../components/Header";
import Mainhome from "../components/Mainhome";
import Data from "../data.json";

const Home = () => {
  const [webtoons, setWebtoons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/webtoons")
      .then((response) => response.json())
      .then((data) => setWebtoons(data))
      .catch((error) => console.error("Error fetching webtoons:", error));
  }, []);

  console.log(webtoons);

  return (
    <>
      <Postnav />
      <Navigation />
      <Header data={Data} />
      <Mainhome data={Data} />
      <div>
        <h1>Liste des Webtoons</h1>
        <ul>
          {webtoons.map((webtoon) => (
            <li key={webtoon._id}>
              <h2>{webtoon.title}</h2>
              <img src={webtoon.thumbnail} alt={webtoon.title} />
              <p>Dernière mise à jour : {webtoon.lastupdatetime}</p>
              <h3>Chapitres :</h3>
              <ul>
                {webtoon.chapitres.map((chapitre, index) => (
                  <li key={index}>
                    {chapitre.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`Chapitre ${index + 1}`}
                      />
                    ))}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
