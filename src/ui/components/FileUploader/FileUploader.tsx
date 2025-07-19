"use client";

import { useRef } from "react";
import RegularButton from "../Button/RegularButton";

const FileUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log(files);
    }
  };

  return (
    <div className="w-full h-44 flex flex-col items-center justify-center gap-2 select-none rounded border border-dashed border-slate-200">
      <RegularButton
        variant="secondary"
        onClick={handleClick}
        title="add file"
        className="text-base text-blue-700 border border-slate-200 bg-white px-6 py-2"
      />
      <p className="text-slate-600 text-sm">Or drag and drop files</p>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        // multiple
      />
    </div>
  );
};

export default FileUploader;
