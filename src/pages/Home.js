import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Postnav from "../components/Postnav";
import Header from "../components/Header";
import Mainhome from "../components/Mainhome";
import axios from "axios";

const Home = () => {
  const [webtoons, setWebtoons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/webtoons/")
      .then((res) => setWebtoons(res.data));
  }, []);

  console.log(webtoons);

  return (
    <>
      <Postnav />
      <Navigation />
      <Header data={webtoons} />
      <Mainhome data={webtoons} />
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
                    <img src={chapitre.url} alt={chapitre.alt} />
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
