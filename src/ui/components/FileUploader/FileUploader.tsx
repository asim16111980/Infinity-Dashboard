"use client";

import { useRef, useState } from "react";
import RegularButton from "../Button/RegularButton";

const FileUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      console.log(files);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="w-full h-44 flex flex-col items-center justify-center gap-2 select-none rounded border-2 border-dashed border-slate-200 cursor-pointer"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <RegularButton
        variant="secondary"
        onClick={handleClick}
        title="add file"
        className="text-base text-blue-700 border border-slate-200 bg-white px-6 py-2"
      />
      <p className="text-slate-600 text-sm">Or drag and drop files</p>
      {selectedFiles.length > 0 && (
        <div className="size-full flex flex-wrap gap-2 mt-2">
          {selectedFiles.map((file, idx) => (
            <img
              key={idx}
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="w-16 h-16 object-cover rounded"
            />
          ))}
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        multiple
        accept="image/*"
        aria-label="File uploader"
      />
    </div>
  );
};

export default FileUploader;
