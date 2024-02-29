import React from "react";
import data from "../data.json";
import { useParams } from "react-router-dom";
import Chapitre from "../components/Chapitre";
import ChapitreNav from "../components/ChapitreNav";

const Lecture = () => {
  const { id } = useParams();
  const { chapter } = useParams();

  const newData = data.webtoons[id].chapitres[chapter - 1];
  const lengthChap = data.webtoons[id].chapitres.length;
  console.log(lengthChap);
  return (
    <>
      <ChapitreNav data={lengthChap} />
      <Chapitre data={newData} />
    </>
  );
};

export default Lecture;
