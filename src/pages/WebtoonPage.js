import React from "react";
import Navigation from "../components/Navigation";
import Postnav from "../components/Postnav";
import WebtoonHeader from "../components/WebtoonHeader";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import ChapterDisplay from "../components/ChapterDisplay";

const WebtoonPage = () => {
  const { id } = useParams();

  const newData = Data.webtoons[id];
  return (
    <>
      <Postnav />
      <Navigation />
      <WebtoonHeader data={newData} />
      <ChapterDisplay data={newData} />
    </>
  );
};

export default WebtoonPage;
