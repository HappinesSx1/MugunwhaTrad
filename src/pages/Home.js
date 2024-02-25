import React from "react";
import Navigation from "../components/Navigation";
import Postnav from "../components/Postnav";
import Header from "../components/Header";
import Mainhome from "../components/Mainhome";
import Data from "../data.json";

const Home = () => {
  return (
    <>
      <Postnav />
      <Navigation />
      <Header data={Data} />
      <Mainhome data={Data} />
    </>
  );
};

export default Home;
