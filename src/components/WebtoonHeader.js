import React, { useState, useCallback, useEffect } from "react";
import { ActionButton, Provider, defaultTheme } from "@adobe/react-spectrum";
import { Text } from "@adobe/react-spectrum";
import Edit from "@spectrum-icons/workflow/Edit";
import { useDropzone } from "react-dropzone";
import axios from "axios";

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

    const dataSend = {
      title: "test",
      thumbnail: "/images/mediumimg.jpg",
      chapitres: formData,
    };

    // axios
    //   .post("http://localhost:5000/webtoons/", {
    //     "Content-Type": "application/json",
    //     body: dataSend,
    //   })
    //   .then((res) => {
    //     console.log("Réponse de la requête POST :", res.data);
    //   })
    //   .catch((err) => {
    //     console.error("Error updating username:", err);
    //   });

    axios({
      method: "post",
      url: "http://localhost:5000/webtoons/",
      data: dataSend,
    })
      .then((res) => {
        console.log("Réponse de la requête POST :", res.data);
      })
      .catch((err) => {
        console.error("Error updating username:", err);
      });
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
