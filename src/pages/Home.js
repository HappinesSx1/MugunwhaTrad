import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Postnav from "../components/Postnav";
import Header from "../components/Header";
import Mainhome from "../components/Mainhome";
import Data from "../data.json";

const Home = () => {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("http://localhost:3001/api/webtoons");
  //       if (!response.ok) {
  //         throw new Error("Erreur de réseau - " + response.status);
  //       }
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.error("Erreur lors de la récupération des données:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/webtoons", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  console.log(data);
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
