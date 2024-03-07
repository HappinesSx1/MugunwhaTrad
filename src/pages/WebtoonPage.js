import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Postnav from "../components/Postnav";
import WebtoonHeader from "../components/WebtoonHeader";
import { useParams } from "react-router-dom";
import ChapterDisplay from "../components/ChapterDisplay";
import axios from "axios";

const WebtoonPage = () => {
  const { name } = useParams();
  const [webtoons, setWebtoons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/webtoons/")
      .then((res) => setWebtoons(res.data));
  }, []);

  const foundWebtoon = webtoons.find(
    (webtoon) => webtoon.title.toLowerCase() === name
  );

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
