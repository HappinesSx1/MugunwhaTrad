import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WebtoonPage from "./pages/WebtoonPage";
import NoFound from "./pages/NoFound";
import Lecture from "./pages/Lecture";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<WebtoonPage />} />
          <Route path="/nofound" element={<NoFound />} />
          <Route path="/:name/:chapter" element={<Lecture />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
