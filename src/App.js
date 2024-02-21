import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WebtoonPage from "./pages/WebtoonPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<WebtoonPage />} />
          <Route path="/:id/:name" element={<WebtoonPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
