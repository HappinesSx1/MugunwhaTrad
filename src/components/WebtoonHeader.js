import React, { useState, useCallback, useEffect } from "react";
import { ActionButton, Provider, defaultTheme } from "@adobe/react-spectrum";
import { Text } from "@adobe/react-spectrum";
import Edit from "@spectrum-icons/workflow/Edit";
import { useDropzone } from "react-dropzone";

const WebtoonHeader = ({ data }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [fileData, setFileData] = useState([]);

  const handleModal = () => {
    setIsEdit(!isEdit);
  };

  /* dropzone */

  const onDrop = useCallback((acceptedFiles) => {
    setFileData(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  /* preview */
  function Previews(props) {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
      accept: {
        "image/*": [],
      },
      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      },
    });

    const thumbs = files.map((file) => (
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
    const formData = new FormData();
    fileData.forEach((file) => {
      formData.append(file.path);
    });

    console.log(formData);
  };

  // const [isEdit, setIsEdit] = useState(false);
  // const [files, setFiles] = useState([]);
  // const [fileData, setFileData] = useState([]);

  // const handleModal = () => {
  //   setIsEdit(!isEdit);
  // };

  // /* dropzone */

  // const onDrop = useCallback((acceptedFiles) => {
  //   setFiles(acceptedFiles);
  //   setFileData([]);
  // }, []);

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // /* preview */
  // function Previews(props) {
  //   const thumbs = files.map((file, index) => {
  //     const data = fileData[index] || {};

  //     return (
  //       <div key={file.name} className="upload-container">
  //         <div className="img-uploaded">
  //           <img
  //             src={file.preview}
  //             // Revoke data uri after image is loaded
  //             onLoad={() => {
  //               URL.revokeObjectURL(file.preview);
  //             }}
  //           />
  //           {data.path && <p>Path: {data.path}</p>}
  //           {data.error && <p>Error: {data.error}</p>}
  //         </div>
  //       </div>
  //     );
  //   });

  //   return (
  //     <section className="dragndrop-container">
  //       <div {...getRootProps({ className: "dropzone" })}>
  //         <input {...getInputProps()} />
  //         <p>Drag 'n' drop some files here, or click to select files</p>
  //       </div>
  //       <aside className="upload-aside">{thumbs}</aside>
  //     </section>
  //   );
  // }

  // // Function to send files to API
  // const sendFilesToAPI = () => {
  //   // Assuming you have an API endpoint to which you want to send the files
  //   const apiUrl = "your_api_endpoint_here";

  //   // Using FormData to prepare files for sending
  //   const formData = new FormData();
  //   files.forEach((file) => {
  //     formData.append("images", file);
  //   });
  // };

  // useEffect(() => {
  //   const newFileData = files.map(() => ({}));
  //   setFileData(newFileData);
  // }, [files]);

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
