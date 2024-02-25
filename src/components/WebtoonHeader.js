import React from "react";

const WebtoonHeader = ({ data }) => {
  return (
    <main className="main-webtoon">
      <div className="webtoon-container">
        <div className="webtoon">
          <div className="webtoon-img">
            <img src={data.thumbnail} alt="" />
          </div>
          <div className="webtoon-desc">
            <p>{data.title}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WebtoonHeader;
