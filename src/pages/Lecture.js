import React from "react";
import data from "../data.json";
import { useParams } from "react-router-dom";
import Chapitre from "../components/Chapitre";

const Lecture = () => {
  const { id } = useParams();
  const { chapter } = useParams();

  const newData = data.webtoons[id].chapitres[chapter - 1];
  console.log(newData);
  return (
    <>
      <Chapitre data={newData} />
    </>
  );
};

export default Lecture;
