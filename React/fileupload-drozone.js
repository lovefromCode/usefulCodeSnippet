import React, { useState } from "react";
import Dropzone from "react-dropzone";

function FileUpload() {
  const [files, setFiles] = useState([]);

  const handleDrop = (acceptedFiles, rejectedFiles, extraParam) => {
    // do something with the files and extra parameter
    console.log("Accepted files:", acceptedFiles);
    console.log("Rejected files:", rejectedFiles);
    console.log("Extra parameter:", extraParam);

    setFiles([...files, ...acceptedFiles]);
  };

  const handleRemove = file => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  const handleUpload = () => {
    const formData = new FormData();

    files.forEach(file => {
      formData.append("files[]", file);
    });

    // Send formData to server using Axios or Fetch
    // ...

    // Clear the uploaded files
    setFiles([]);
  };

  return (
    <div>
      <Dropzone
        accept="image/jpeg, image/png"
        multiple={true}
        onDrop={(acceptedFiles, rejectedFiles) =>
          handleDrop(acceptedFiles, rejectedFiles, "myExtraParam")
        }
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
      {files.length > 0 && (
        <div>
          <h2>Selected files</h2>
          <ul>
            {files.map(file => (
              <li key={file.name}>
                {file.name} ({file.size} bytes){" "}
                <button onClick={() => handleRemove(file)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
