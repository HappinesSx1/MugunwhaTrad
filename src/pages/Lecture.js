import React from "react";
import { useLocation } from "react-router-dom";

const Lecture = ({ chapterData }) => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <img src={location.state} alt="" />
    </div>
  );
};

export default Lecture;
