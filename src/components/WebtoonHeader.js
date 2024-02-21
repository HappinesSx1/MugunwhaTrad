import React from "react";
import Data from "../data.json";
import { useParams } from "react-router-dom";

const WebtoonHeader = () => {
  const { id } = useParams();

  const newData = Data.webtoons[id];

  return (
    <main className="main-webtoon">
      <div className="webtoon-container">
        <div className="webtoon">
          <div className="webtoon-img">
            <img src={newData.thumbnail} alt="" />
          </div>
          <div className="webtoon-desc"></div>
        </div>
      </div>
    </main>
  );
};

export default WebtoonHeader;
