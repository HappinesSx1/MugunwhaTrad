import React from "react";
import Navigation from "../components/Navigation";
import Postnav from "../components/Postnav";
import { useParams } from "react-router-dom";

const WebtoonPage = () => {
  const { name } = useParams();

  return (
    <>
      <Postnav />
      <Navigation />
      <div>Le pornwha est : {name}</div>
    </>
  );
};

export default WebtoonPage;
