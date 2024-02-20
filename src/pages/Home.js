import React from "react";
import Navigation from "../components/Navigation";
import Postnav from "../components/Postnav";
import Header from "../components/Header";
import Mainhome from "../components/Mainhome";

const Home = () => {
  return (
    <>
      <Postnav />
      <Navigation />
      <Header />
      <Mainhome />
    </>
  );
};

export default Home;
