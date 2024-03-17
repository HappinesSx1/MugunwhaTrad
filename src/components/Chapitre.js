import React from "react";

const Chapitre = ({ data }) => {
  console.log(data);
  return (
    <div className="img-container">
      {data.url.map((img, index) => (
        <img src={img} alt="" key={index} />
      ))}
    </div>
  );
};

export default Chapitre;
