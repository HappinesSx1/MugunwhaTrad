import React from "react";
import Navigation from "../components/Navigation";
import Postnav from "../components/Postnav";
import WebtoonHeader from "../components/WebtoonHeader";
import { useParams } from "react-router-dom";
import ChapterDisplay from "../components/ChapterDisplay";
import GetWebtoonApi from "../hook/GetWebtoonApi";

const WebtoonPage = () => {
  const { name } = useParams();

  const { data, loading } = GetWebtoonApi("http://localhost:5000/webtoons/");

  if (loading) {
    return <div>Loading...</div>;
  }

  const foundWebtoon = data.find(
    (webtoon) => webtoon.title.toLowerCase() === name
  );

  console.log(foundWebtoon);

  return (
    <>
      <Postnav />
      <Navigation />
      <WebtoonHeader data={foundWebtoon} />
      <ChapterDisplay data={foundWebtoon} />
    </>
  );
};

export default WebtoonPage;
