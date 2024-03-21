import React, { useState, useCallback, useEffect } from "react";
import { ActionButton, Provider, defaultTheme } from "@adobe/react-spectrum";
import { Text } from "@adobe/react-spectrum";
import Edit from "@spectrum-icons/workflow/Edit";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { NavLink } from "react-router-dom";

const WebtoonHeader = ({ data }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [fileData, setFileData] = useState([]);
  let formData = [];

  const handleModal = () => {
    setIsEdit(!isEdit);
  };

  /* dropzone */

  // const onDrop = useCallback((acceptedFiles) => {
  //   // setFileData(acceptedFiles);
  // }, []);
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  /* preview */
  function Previews(props) {
    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
      accept: {
        "image/*": [],
      },
      onDrop: (acceptedFiles) => {
        const updatedFiles = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        setFiles([...files, ...updatedFiles]);
        setFileData([...fileData, ...updatedFiles]);
      },
    });

    const thumbs = fileData.map((file) => (
      <div key={file.name} className="upload-container">
        <div className="img-uploaded">
          <img
            src={file.preview}
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        </div>
      </div>
    ));

    useEffect(() => {
      // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
      return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, []);

    return (
      <section className="dragndrop-container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside className="upload-aside">{thumbs}</aside>
      </section>
    );
  }

  /* API PUT */
  // Function to send files to API
  const sendFilesToAPI = () => {
    // Using FormData to prepare files for sending
    fileData.forEach((file) => {
      formData.push(file.path);
    });

    console.log(formData);

    const chapitreData = {
      url: formData,
      alt: "Nouveau chapitre2",
    };

    const webtoonId = data._id;
    console.log(webtoonId);

    axios
      .post(
        `http://localhost:5000/webtoons/${webtoonId}/chapitres`,
        chapitreData
      )
      .then((response) => {
        console.log("Chapitre ajouté avec succès :", response.data);
        // Traitez la réponse si nécessaire
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du chapitre :", error);
        // Gérez l'erreur si nécessaire
      });
  };

  console.log(data.tags);

  return (
    <main className="main-webtoon">
      <div className="webtoon-container">
        <div className="title-webtoon">
          <h1>{data.title}</h1>
        </div>
        <div className="webtoon">
          <div className="webtoon-img">
            <img src={data.thumbnail} alt="" />
          </div>
          <div className="webtoon-desc">
            <div className="themes-container">
              <div className="rating-container">
                <div className="rating-star">{data.rating}</div>
              </div>
              <div className="rank">
                <h3>Rank</h3>
                <p>N/A, it has 45.8k monthly views</p>
              </div>
              <div className="alternative">
                <h3>Alternative</h3>
                <p>待ち人、超来たる。</p>
              </div>
              <div className="author">
                <h3>Author(s)</h3>
                <p>{data.autor}</p>
              </div>
              <div className="artist">
                <h3>Artist(s)</h3>
                <p>{data.artist}</p>
              </div>
              <div className="genre">
                <h3>Genre(s)</h3>
                {data.types.map((type, index) => (
                  <p key={index}>{type}</p>
                ))}
              </div>
              <div className="tag">
                <h3>Tag(s)</h3>
                {data.tags.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
            </div>
            <div className="reading-choices">
              <div className="read-first">
                <NavLink>Read First</NavLink>
              </div>
              <div className="read-last"></div>
            </div>
            <button onClick={handleModal}>Ouvrir</button>
            <Provider theme={defaultTheme} width="69px">
              <ActionButton onClick={handleModal} staticColor="white">
                <Edit />
                <Text>Edit</Text>
              </ActionButton>
            </Provider>
          </div>
        </div>
      </div>
      {isEdit && (
        <div className="modal">
          <div className="modal-back" onClick={handleModal}></div>
          <div className="modal-container">
            <div className="name-container">
              <label htmlFor="namechap">Nom chapitre : </label>
              <input type="text" id="namechap" />
            </div>
            <Previews />
            <button onClick={sendFilesToAPI}>Send Files to API</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default WebtoonHeader;
