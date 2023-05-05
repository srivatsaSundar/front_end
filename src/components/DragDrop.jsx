import React from "react";
import { useDropzone } from "react-dropzone";
import "./drop.css";

function DragDrop({ open }) {
    const { getRootProps, getInputProps, isDragOn, acceptedFiles } =
    useDropzone({});
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
        {isDragOn ? (
          <p className="dropzone-content">
            Release to drop the files here
          </p>
        ) : (
          <p className="dropzone-content">
            Drag & Drop some files here, or click to select files<br></br>
            <br></br>
            <strong>Upload Doc or PDF files only</strong>
          </p>
          
        )}
        <button type="button" onClick={open} className="btn">
          Upload Files
        </button>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}
export default DragDrop;
