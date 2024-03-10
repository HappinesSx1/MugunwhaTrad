import React from "react";
import Navigation from "../components/Navigation";
import Postnav from "../components/Postnav";
import Header from "../components/Header";
import Mainhome from "../components/Mainhome";
import GetWebtoonApi from "../hook/GetWebtoonApi";
import {
  ProgressCircle,
  defaultTheme,
  Provider,
  View,
} from "@adobe/react-spectrum";

const Home = () => {
  const { data, loading } = GetWebtoonApi("http://localhost:5000/webtoons/");

  if (loading) {
    return (
      <div className="loading-container">
        <Provider theme={defaultTheme}>
          <ProgressCircle
            aria-label="Loading…"
            size="L"
            isIndeterminate
            staticColor="white"
          />
        </Provider>
      </div>
    );
  }

  return (
    <>
      <Postnav />
      <Navigation />
      <Header data={data} />
      <Mainhome data={data} />
      {/* <div>
        <h1>Liste des Webtoons</h1>
        <ul>
          {data.map((webtoon) => (
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
      </div> */}
    </>
  );
};

export default Home;
