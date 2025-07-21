"use client";

import { useEffect, useRef, useState } from "react";
import RegularButton from "../Button/RegularButton";
import { clsx } from "clsx";
import IconButton from "../Button/IconButton";

const FileUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<
    { file: File; url: string }[]
  >([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files).map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files) {
      const newFiles = Array.from(files).map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleRemove = (index: number) => {
    setSelectedFiles((prev) => {
      URL.revokeObjectURL(prev[index].url);
      return prev.filter((_, idx) => idx !== index);
    });
  };

  return (
    <div
      className="w-full h-44 flex flex-col items-center justify-center gap-2 p-2 select-none rounded border-2 border-dashed border-slate-200 cursor-pointer"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* <div className="size-full flex flex-wrap justify-center gap-2 overflow-y-auto"> */}
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2 overflow-y-auto">

        <div
          className={clsx(
            "flex flex-col items-center justify-center gap-2",
            selectedFiles.length > 0 && "bg-slate-700 bg-opacity-5"
          )}
        >
          <RegularButton
            variant="secondary"
            onClick={handleClick}
            title={selectedFiles.length > 0 ? "" : "Add files"}
            iconName="plus"
            aria-label="Add files"
            iconClassName={selectedFiles.length > 0 ? "block" : "hidden"}
            className={clsx(
              "text-blue-700 border border-slate-200 bg-white",
              selectedFiles.length > 0
                ? "rounded-full bg-transparent p-4"
                : "text-base px-6 py-2"
            )}
          />
          <p className="text-slate-600 text-sm">Or drag and drop files</p>
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
        {selectedFiles.length > 0 &&
          selectedFiles.map((file, idx) => (
            <div
              key={idx}
              className="relative h-40 overflow-hidden rounded"
            >
              <img
                src={file.url}
                alt={file.file.name}
                className="size-full object-cover rounded"
              />
              <IconButton
                onClick={handleRemove.bind(null, idx)}
                title="Remove"
                className="absolute top-1 right-1 size-6 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition"
                iconClassName="text-red-500"
                aria-label="Remove"
                iconName="trash"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FileUploader;
