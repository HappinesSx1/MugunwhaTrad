import React, { useState } from "react";
import { ActionButton } from "@adobe/react-spectrum";
import { Text } from "@adobe/react-spectrum";
import Edit from "@spectrum-icons/workflow/Edit";

const WebtoonHeader = ({ data }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleModal = () => {
    setIsEdit(!isEdit);
  };

  return (
    <main className="main-webtoon">
      <div className="webtoon-container">
        <div className="webtoon">
          <div className="webtoon-img">
            <img src={data.thumbnail} alt="" />
          </div>
          <div className="webtoon-desc">
            <p>{data.title}</p>
            <button onClick={handleModal}>Ouvrir</button>
            <ActionButton onClick={handleModal} staticColor="white">
              <Edit />
              <Text>Edit</Text>
            </ActionButton>
          </div>
        </div>
      </div>
      {isEdit && (
        <div className="modal">
          <div className="modal-back" onClick={handleModal}></div>
          <div className="modal-container"></div>
        </div>
      )}
    </main>
  );
};

export default WebtoonHeader;
