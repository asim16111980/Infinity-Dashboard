"use client";

import { useRef, useState } from "react";
import RegularButton from "../Button/RegularButton";
import { clsx } from "clsx";
import IconButton from "../Button/IconButton";
import { filterAndPrepareImageFiles } from "@/utils/fileUtils";
import { FileUploaderProps } from "./fileUploader.type";

const FileUploader = ({ label, maxFiles = 1 }: FileUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<
    { file: File; url: string }[]
  >([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    maxFiles >= 1
      ? setSelectedFiles((prev) => filterAndPrepareImageFiles(files, prev))
      : setSelectedFiles((prev) =>
          filterAndPrepareImageFiles([files[0]], prev)
        );
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (!files) return;

    maxFiles >= 1
      ? setSelectedFiles((prev) => filterAndPrepareImageFiles(files, prev))
      : setSelectedFiles(filterAndPrepareImageFiles([files[0]], []));
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
    <div className="flex flex-col gap-1 select-none">
      <span className="text-sm text-slate-600 capitalize">{label}</span>
      <div
        className="w-full h-44 flex flex-col items-center justify-center gap-2 p-2 select-none rounded border-2 border-dashed border-slate-200 cursor-pointer"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div
          className={clsx(
            "w-full grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] justify-items-center gap-2",
            {
              "overflow-y-auto": selectedFiles.length > 1,
            }
          )}
        >
          <div
            className={clsx("flex flex-col items-center justify-center gap-2", {
              hidden: maxFiles === 1 && selectedFiles.length > 0,
              "bg-slate-700 bg-opacity-5": selectedFiles.length > 0,
              "col-span-full": selectedFiles.length === 0,
            })}
          >
            <RegularButton
              variant="custom"
              onClick={handleClick}
              title={selectedFiles.length > 0 ? "" : "Add files"}
              iconName="plus"
              aria-label="Add files"
              iconClasses={selectedFiles.length > 0 ? "block" : "hidden"}
              className={clsx(
                "text-blue-500 border border-slate-200 bg-white",
                selectedFiles.length > 0
                  ? "rounded-full bg-transparent p-4"
                  : "text-base px-6 py-2"
              )}
            />
            <p className="text-slate-600 text-sm px-2 text-center">Or drag and drop files</p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              multiple={maxFiles >= 1}
              accept="image/*"
              aria-label="File uploader"
            />
          </div>
          {selectedFiles.length > 0 &&
            selectedFiles.map((file, idx) => (
              <div
                key={idx}
                className={clsx("relative h-40 overflow-hidden rounded", {
                  "col-span-full": maxFiles === 1 && selectedFiles.length > 0,
                })}
              >
                <img
                  src={file.url}
                  alt={file.file.name}
                  className="size-full object-contain rounded"
                />
                <IconButton
                  onClick={handleRemove.bind(null, idx)}
                  title="Remove"
                  className="absolute top-1 right-1 size-6 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition"
                  iconClasses="text-red-500"
                  aria-label="Remove"
                  iconName="trash"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
