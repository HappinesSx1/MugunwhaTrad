import React from "react";
// import data from "../data.json";
import { useParams } from "react-router-dom";
import Chapitre from "../components/Chapitre";
import ChapitreNav from "../components/ChapitreNav";
import GetWebtoonApi from "../hook/GetWebtoonApi";

const Lecture = () => {
  const { id } = useParams();
  const { chapter } = useParams();
  const { name } = useParams();

  const { data, loading } = GetWebtoonApi("http://localhost:5000/webtoons/");

  if (loading) {
    return <div>Loading...</div>;
  }

  const foundWebtoon = data.find(
    (webtoon) => webtoon.title.toLowerCase() === name
  );

  // Connaitre le chapitre exact
  const newData = foundWebtoon.chapitres[chapter - 1];

  // Connaitre la longueur du tableau chapitres
  const lengthChap = foundWebtoon.chapitres.length;
  return (
    <>
      <ChapitreNav data={lengthChap} />
      <Chapitre data={newData} />
    </>
  );
};

export default Lecture;
